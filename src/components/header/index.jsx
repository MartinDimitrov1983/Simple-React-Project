import React from 'react'
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
    const onChange = (e) => {
        setSearchValue(e.target.value)
        toggleSearch(false)
    }
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
                        onChange={onChange}
                    />
                    <Button
                        title="Search"
                        type="button"
                        onClick={() => toggleSearch(true)}
                    />
                </div>
                <div>
                    <Select data={data} value={value} setValue={setValue} />
                </div>
            </div>
        </div>
    )
}

export default Header
