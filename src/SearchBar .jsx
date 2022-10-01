export const SearchBar = () => {
  return (
    <form>
      <div>
        <input type="text" name="q" id="q" placeholder="Search..." />
      </div>

      <div>
        <label htmlFor="stock">
          <input type="checkbox" name="stock" id="stock" />
          Only show products in stock
        </label>
      </div>
    </form>
  )
}
