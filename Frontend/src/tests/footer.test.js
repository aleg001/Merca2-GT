import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Footer from '../Components/footer.jsx'

it('Render sin crashear', () => {
  render(<Footer />)
})
