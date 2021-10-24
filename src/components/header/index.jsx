import React, { useContext, useState } from 'react'
import Select from '../select'
import Button from '../button'
import styles from './index.module.css'

const Header = ({
    data,
    searchValue,
    setSearchValue,
    toggleSearch,
    value,
    setValue,
    ...props
}) => {
    return (
        <div className={styles.container} {...props}>
            <p>
                Search by <i>name</i>/<i>plan number</i> or filter by{' '}
                <i>region</i>
            </p>
            <div className={styles.header}>
                <div className={styles.searchBar}>
                    <input
                        id="search-value"
                        type="text"
                        name="search-value"
                        placeholder="Enter name or plan number"
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                            toggleSearch(false)
                        }}
                    />
                    <Button
                        title="Search"
                        type="button"
                        onClick={() => toggleSearch(true)}
                    />
                </div>
                <div>
                    <Select
                        className={styles.select}
                        data={data}
                        value={value}
                        setValue={setValue}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
