import { TableRow, TableCell } from '@mui/material'

export const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: '#f44336' }}>{product.name}</span>
  )

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{product.price}</TableCell>
    </TableRow>
  )
}
