import React, { useState } from 'react'
import { useHistory } from 'react-router'

import Form from '../../components/form'
import { createProperty } from '../../services/services'

const CratePage = () => {
    const [properties, setProperties] = useState({})
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        await createProperty(properties)
        history.push(`/`)
    }

    return (
        <Form
            handleSubmit={handleSubmit}
            properties={properties}
            setProperties={setProperties}
        />
    )
}

export default CratePage
