import './App.css'
import { FilterableProductTable } from './FilterableProductTable'
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'
import { ProductTable } from './ProductTable'

function App() {
  return (
    <div className="App">
      <FilterableProductTable />
      <ProductTable />
      <ProductCategoryRow />
      <ProductRow />
    </div>
  )
}

export default App
