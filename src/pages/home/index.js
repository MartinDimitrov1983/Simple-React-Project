import React, { useState, useEffect } from 'react'
import Table from '../../components/table/Table'
import Header from '../../components/header'
import Button from '../../components/button'
import styles from './index.module.css'
import { useHistory } from 'react-router'
import { deleteProperty } from '../../services/services'
import { fetchData } from '../../utils/fetchData'

const HomePage = () => {
    const history = useHistory()
    const [value, setValue] = useState('none')
    const [searchValue, setSearchValue] = useState('')
    const [isSearch, toggleSearch] = useState(false)
    const [properties, setProperties] = useState(null)
    const [regions, setRegions] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData(setProperties, setRegions, setLoading)
    }, [])

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
        await fetchData(setProperties, setRegions, setLoading)
    }

    if (loading) {
        return <div>Loading....</div>
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
