/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import ItemInGrid from '../Components/itemInGrid.jsx'

it('Render sin crashear', () => {
  const setIdSelectP = jest.fn()
  const SelectP = jest.fn()
  render(
    <ItemInGrid
      itemName='try'
      itemLocation='try'
      itemPrice={3}
      itemPublishDate='try'
      itemImage='try'
      itemId='2'
      setIdSelectedProduct={setIdSelectP}
      setSelectedProduct={SelectP}
    />
  )
})

it('Se llama a setOnShow con dicha opcion', async () => {
  const SelectP = jest.fn()
  const setIdSelectP = jest.fn()
  render(
    <ItemInGrid
      itemName='try'
      itemLocation='try'
      itemPrice={3}
      itemPublishDate='try'
      itemImage='try'
      itemId='2'
      setIdSelectedProduct={setIdSelectP}
      setSelectedProduct={SelectP}
    />
  )

  const select = await screen.getByTestId('homePage')
  await userEvent.click(select, true)
  expect(SelectP).toHaveBeenCalledWith(true)
})
