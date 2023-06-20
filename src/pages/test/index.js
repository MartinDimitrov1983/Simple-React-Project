import React from 'react'
import styles from './index.module.css'

const TestPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tooltipWrapper}>
                <div className={styles.tooltip}>
                    Tooltip
                    <span className={styles.tooltiptext}>Tooltip text</span>
                </div>
            </div>

            <h2>Tooltip</h2>
            <p>Move the mouse over the text below:</p>
        </div>
    )
}

export default TestPage
