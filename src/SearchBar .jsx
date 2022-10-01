export const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <form>
      <div>
        <input
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
          type="text"
          name="q"
          id="q"
          placeholder="Search..."
        />
      </div>

      <div>
        <label htmlFor="stock">
          <input
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
            type="checkbox"
            name="stock"
            id="stock"
          />
          Only show products in stock
        </label>
      </div>
    </form>
  )
}
