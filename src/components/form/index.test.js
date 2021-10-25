import React from 'react'
import { render } from '@testing-library/react'

import Form from './index'

test('Snapshot Form', () => {
    const { asFragment } = render(<Form />)
    expect(asFragment()).toMatchSnapshot()
})
