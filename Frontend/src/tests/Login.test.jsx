import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('When a number button is pressed', () => {
  it('shows the number in the display', async () => {
    render(<Calculator />)
    const display = (await screen.findAllByText(/0/))[0]
    const button5 = await screen.findByText(/5/)
    const button2 = await screen.findByText(/2/)
  
    await userEvent.click(button5)
    await userEvent.click(button2)

    expect(
      display.innerHTML
    ).toBe('52')
  })
})