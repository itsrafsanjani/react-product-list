import { TableCell, TableRow } from '@mui/material'

export const ProductCategoryRow = ({ category }) => {
  return (
    <TableRow colSpan="2">
      <TableCell>{category}</TableCell>
    </TableRow>
  )
}
