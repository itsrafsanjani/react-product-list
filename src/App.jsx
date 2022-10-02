import { Container, Grid } from '@mui/material'
import './App.css'
import { FilterableProductTable } from './FilterableProductTable'

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]

function App() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid item xs={12} sm={8} md={4} lg={3}>
        <FilterableProductTable products={PRODUCTS} />
      </Grid>
    </Grid>
  )
}

export default App
