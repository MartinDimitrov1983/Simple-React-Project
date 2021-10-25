import React from 'react'
import TableRow from './TableRow.jsx'
import styles from './index.module.css'

const HEADER_VALUES = {
    id: 'id',
    name: 'name',
    plan: 'plan',
    units: 'units',
    city: 'city',
    region: 'region',
    manager: 'manager',
}
const Table = ({ data, onDelete, ...props }) => {
    return (
        <div className={styles.container} {...props}>
            <table>
                <thead>
                    <TableRow
                        tableCells={HEADER_VALUES}
                        tag="th"
                        isBodyRow={false}
                    />
                </thead>
                <tbody>
                    {data?.map((rowData) => (
                        <TableRow
                            key={rowData.id}
                            tableCells={rowData}
                            tag="td"
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
