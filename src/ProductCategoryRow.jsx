import { TableCell, TableRow } from '@mui/material'

export const ProductCategoryRow = ({ category }) => {
  return (
    <TableRow>
      <TableCell
        colSpan="2"
        align="center"
        sx={{ fontWeight: 'bold', background: '#1976d2', color: '#ffffff' }}
      >
        {category}
      </TableCell>
    </TableRow>
  )
}
