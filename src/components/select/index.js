import React, { useState } from 'react'
//import styles from './index.module.css'

const Select = ({ data, value, setValue, ...props }) => {
    const onChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <select value={value} onChange={onChange} {...props}>
            <option value={'none'}>Choose Region</option>
            {data?.map((value, index) => (
                <option key={`${value.id}-${index}`} value={value.name}>
                    {value.name}
                </option>
            ))}
        </select>
    )
}

export default Select
