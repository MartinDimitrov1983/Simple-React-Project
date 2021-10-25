import React from 'react'
import { render } from '@testing-library/react'

import Select from './index'

test('Snapshot Select', () => {
    const { asFragment } = render(<Select />)
    expect(asFragment()).toMatchSnapshot()
})
