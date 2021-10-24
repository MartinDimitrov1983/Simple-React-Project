import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { deleteProperty } from '../../services/services'
import Button from '../button'

const TableRow = ({
    tableCells,
    tag: Tag,
    isBodyRow = true,
    onDelete,
    ...props
}) => {
    const history = useHistory()
    const tableRowData = Object.values(tableCells)
    //const context = useContext(AppContext)

    const onEdit = (id) => {
        history.push(`/edit/${id}`)
    }

    return (
        <tr {...props}>
            {tableRowData.map((value, index) => {
                if (index === 0) {
                    return
                }

                return <Tag key={index}>{value}</Tag>
            })}
            <Tag>
                {isBodyRow && (
                    <Button
                        title="Edit"
                        onClick={() => onEdit(tableRowData[0])}
                    />
                )}
            </Tag>
            <Tag>
                {isBodyRow && (
                    <Button
                        title="Delete"
                        onClick={() => onDelete(tableRowData[0])}
                    />
                )}
            </Tag>
        </tr>
    )
}
export default TableRow
