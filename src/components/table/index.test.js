import React from 'react'
import { render } from '@testing-library/react'

import Table from './Table'

test('Snapshot Table', () => {
    const { asFragment } = render(<Table />)
    expect(asFragment()).toMatchSnapshot()
})
