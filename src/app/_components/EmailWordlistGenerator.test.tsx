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

    // Previews show headings
    expect(screen.getByText(/Emails \(preview\)/i)).toBeInTheDocument()
    expect(screen.getByText(/Passwords \(preview\)/i)).toBeInTheDocument()
    expect(screen.getByText(/Usernames \(preview\)/i)).toBeInTheDocument()
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
    const emailsPreview = screen.getByText(/Emails \(preview\)/i).parentElement as HTMLElement
    expect(emailsPreview.textContent).not.toMatch(/@gmail\.com/i)
    expect(emailsPreview.textContent).toMatch(/@example\.com/i)
  })
})
