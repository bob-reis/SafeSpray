import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import EmailWordlistGenerator from './EmailWordlistGenerator'

describe('EmailWordlistGenerator downloads', () => {
  const origCreate = global.URL.createObjectURL
  const origRevoke = global.URL.revokeObjectURL

  beforeEach(() => {
    // @ts-ignore
    global.URL.createObjectURL = jest.fn(() => 'blob:mock')
    // @ts-ignore
    global.URL.revokeObjectURL = jest.fn()
  })

  afterEach(() => {
    global.URL.createObjectURL = origCreate
    global.URL.revokeObjectURL = origRevoke
  })

  it('enables download buttons after generation and triggers anchor click', () => {
    const appendSpy = jest.spyOn(document.body, 'appendChild')
    render(<EmailWordlistGenerator />)
    fireEvent.change(screen.getByLabelText(/First name/i), { target: { value: 'Test' } })
    fireEvent.change(screen.getByLabelText(/Last name/i), { target: { value: 'User' } })
    fireEvent.click(screen.getByRole('button', { name: /Generate/i }))

    const btn = screen.getByRole('button', { name: /Download emails\.txt/i })
    expect(btn).toBeEnabled()
    fireEvent.click(btn)
    expect(appendSpy).toHaveBeenCalled()
  })
})

