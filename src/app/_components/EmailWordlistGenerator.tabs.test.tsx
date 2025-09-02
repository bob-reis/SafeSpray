import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmailWordlistGenerator from './EmailWordlistGenerator'

describe('EmailWordlistGenerator tabs', () => {
  it('switches between tabs and renders content', () => {
    render(<EmailWordlistGenerator />)

    // Default tab shows the generator form
    expect(screen.getByText(/Generator Form/i)).toBeInTheDocument()

    // Switch to methodology tab
    fireEvent.click(screen.getByRole('button', { name: /Pentest Methodology/i }))
    expect(screen.getByText(/Penetration Testing Methodology/i)).toBeInTheDocument()

    // Switch to toolkit tab
    fireEvent.click(screen.getByRole('button', { name: /OSINT Toolkit/i }))
    expect(screen.getByText(/OSINT & Cyber Intelligence Toolkit/i)).toBeInTheDocument()

    // Back to generator
    fireEvent.click(screen.getByRole('button', { name: /Intelligence Generator/i }))
    expect(screen.getByText(/Generator Form/i)).toBeInTheDocument()
  })
})

