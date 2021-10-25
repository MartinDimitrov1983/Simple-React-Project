import React from 'react'
import { render } from '@testing-library/react'

import Input from './index'

test('Snapshot Input', () => {
    const { asFragment } = render(<Input />)
    expect(asFragment()).toMatchSnapshot()
})
