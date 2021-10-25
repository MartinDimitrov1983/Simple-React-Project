import React, { useState, useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Form from '../../components/form'
import { getProperty, updateProperty } from '../../services/services'

const EditPage = () => {
    const history = useHistory()
    const { id } = useParams()

    const [properties, setProperties] = useState()

    const getData = useCallback(async () => {
        const propId = Number(id)
        const prop = await getProperty(propId)
        setProperties(prop)
    }, [id])

    useEffect(() => {
        getData()
    }, [getData])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const propId = Number(id)
        const body = { ...properties, id: propId }
        await updateProperty(body)
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

export default EditPage
