import React from 'react'
import styles from './index.module.css'

const Button = ({ title, onClick, ...props }) => {
    return (
        <button className={styles.btn} onClick={onClick} {...props}>
            {' '}
            {title}{' '}
        </button>
    )
}

export default Button
