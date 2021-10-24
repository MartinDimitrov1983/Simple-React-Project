import React, { useState, useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Form from '../../components/form'
import { getProperty, updateProperty } from '../../services/services'

const EditPage = () => {
    const history = useHistory()
    const params = useParams()
    const [properties, setProperties] = useState()

    const getData = useCallback(async () => {
        const id = Number(params.id)
        const prop = await getProperty(id)
        setProperties(prop)
    }, [params.id])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const id = Number(params.id)
        const body = { ...properties, id }
        console.log(body)
        await updateProperty(body)
        history.push(`/`)
    }

    useEffect(() => {
        getData()
    }, [getData])

    return (
        <Form
            handleSubmit={handleSubmit}
            properties={properties}
            setProperties={setProperties}
        />
    )
}

export default EditPage
