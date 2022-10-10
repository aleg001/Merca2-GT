import React from 'react'
import { render, screen } from '@testing-library/react'
import Homepage from '../pages/Homepage'
import fetchMock, { enableFetchMocks} from 'jest-fetch-mock'
enableFetchMocks()
fetchMock.dontMock()


it('Estos se guardan como value en los componentes', async () => {
  const setter = jest.fn()
  render(<Homepage
    userName={'pao'}
    setOnShow={setter}
  />)
})