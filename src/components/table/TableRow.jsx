import React from 'react'
import { useHistory } from 'react-router-dom'
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
    const [id] = tableRowData

    const onEdit = (id) => {
        history.push(`/edit/${id}`)
    }

    return (
        <tr {...props}>
            {tableRowData.map((value, index) => {
                return index > 0 && <Tag key={index}>{value}</Tag>
            })}
            <Tag>
                {isBodyRow && (
                    <Button title="Edit" onClick={() => onEdit(id)} />
                )}
            </Tag>
            <Tag>
                {isBodyRow && (
                    <Button title="Delete" onClick={() => onDelete(id)} />
                )}
            </Tag>
        </tr>
    )
}
export default TableRow
