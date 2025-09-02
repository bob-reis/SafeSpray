import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmailWordlistGenerator from './EmailWordlistGenerator'

describe('EmailWordlistGenerator', () => {
  it('renders and generates previews', () => {
    render(<EmailWordlistGenerator />)
    // Fill minimal fields
    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'Alice' } })
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Smith' } })
    // Mask birth date
    const birth = screen.getByLabelText(/Birth date/i) as HTMLInputElement
    fireEvent.change(birth, { target: { value: '31121999' } })
    expect(birth.value).toBe('31/12/1999')
    fireEvent.click(screen.getByRole('button', { name: /Generate/i }))

    // Previews show headings (use heading role to avoid duplicates)
    expect(screen.getByRole('heading', { name: /Email Vectors/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Password Arsenal/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Identity Matrix/i })).toBeInTheDocument()
  })

  it('respects provider toggles and custom domain validation', () => {
    render(<EmailWordlistGenerator />)
    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'Bob' } })
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'Reis' } })

    // Uncheck gmail.com
    const gmailCheckbox = screen.getByLabelText('gmail.com') as HTMLInputElement
    if (gmailCheckbox.checked) fireEvent.click(gmailCheckbox)

    // Add invalid custom domain; it should be ignored
    fireEvent.change(screen.getByLabelText(/Custom domains/i), { target: { value: 'invalid_domain' } })
    // Add a valid custom domain
    fireEvent.change(screen.getByLabelText(/Custom domains/i), { target: { value: 'example.com' } })

    fireEvent.click(screen.getByRole('button', { name: /Generate/i }))

    // Emails preview should not include gmail.com and can include example.com
    // Locate the Emails list panel using its section marker
    const emailsPanel = screen.getByText(/\[ENUMERATION TARGETS\]/i).parentElement as HTMLElement
    expect(emailsPanel.textContent).not.toMatch(/@gmail\.com/i)
    expect(emailsPanel.textContent).toMatch(/@example\.com/i)
  })

  it('shows OSINT tooltip on hover over First name label', () => {
    render(<EmailWordlistGenerator />)
    const firstNameLabel = screen.getByText(/First name/i)
    fireEvent.mouseOver(firstNameLabel)
    expect(screen.getByText(/OSINT Tip:/i)).toBeInTheDocument()
  })
})
