import React, { useState, useEffect } from 'react'
import Table from '../../components/table/Table'
import Header from '../../components/header'
import Button from '../../components/button'
import styles from './index.module.css'
import { useHistory } from 'react-router'
import {
    getProperties,
    getRegion,
    getManager,
    deleteProperty,
} from '../../services/services'

const HomePage = () => {
    const history = useHistory()
    const [value, setValue] = useState('none')
    const [searchValue, setSearchValue] = useState('')
    const [isSearch, toggleSearch] = useState(false)
    const [properties, setProperties] = useState(null)
    const [regions, setRegions] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const props = await getProperties()
        const regions = await getRegion()
        const mappedProps = []

        for (let i = 0; i < props.length; i++) {
            const propsRegion = regions.find(
                (region) => region.id === props[i].region
            )
            const manager = await getManager(props[i].manager)
            console.log('myLog', i, propsRegion)
            const currentProp = {
                ...props[i],
                region: propsRegion.name,
                manager: `${manager?.firstName} ${manager?.lastName}`,
            }

            mappedProps.push(currentProp)
        }

        setProperties(mappedProps)
        setRegions(regions)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return <div>Loading....</div>
    }

    const filterBy = (value, properties) => {
        return value !== 'none'
            ? properties.filter((property) => property.region === value)
            : properties
    }

    const onSearch = (properties, isSearch, searchValue) => {
        if (isSearch) {
            const result = properties.filter(
                (property) =>
                    property.name.includes(searchValue) ||
                    property.plan.includes(searchValue)
            )

            return filterBy(value, result)
        }

        return filterBy(value, properties)
    }

    const onDelete = async (id) => {
        await deleteProperty(id)
        await fetchData()
    }

    return (
        <>
            <Header
                data={regions}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                toggleSearch={toggleSearch}
                value={value}
                setValue={setValue}
            />
            <Table
                data={onSearch(properties, isSearch, searchValue)}
                onDelete={onDelete}
            />
            <Button
                className={styles.btn}
                title="Create Property"
                onClick={() => history.push('/create')}
            />
        </>
    )
}

export default HomePage
