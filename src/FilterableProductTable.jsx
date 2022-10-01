import { ProductTable } from "./ProductTable"
import { SearchBar } from "./SearchBar "

export const FilterableProductTable = ({products}) => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}
