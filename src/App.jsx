import { useState } from 'react'
import './App.css'
import { FilterableProductTable } from './FilterableProductTable'
import { ProductCategoryRow } from './ProductCategoryRow'
import { ProductRow } from './ProductRow'
import { ProductTable } from './ProductTable'
import { SearchBar } from './SearchBar '

function App() {
  return (
    <div className="App">
      <FilterableProductTable />
      <SearchBar />
      <ProductTable />
      <ProductCategoryRow />
      <ProductRow />
    </div>
  )
}

export default App
