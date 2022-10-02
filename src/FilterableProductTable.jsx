import { Card, CardContent, Grid } from '@mui/material'
import { useState } from 'react'
import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar '

export const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)
  return (
      <Card>
        <CardContent>
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
          />
          <ProductTable
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </CardContent>
      </Card>
  )
}
