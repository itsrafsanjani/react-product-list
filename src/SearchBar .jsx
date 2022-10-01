export const SearchBar = () => {
  return (
    <form>
      <div>
        <input type="text" name="q" id="q" placeholder="Search..." />
      </div>

      <div>
        <label htmlFor="stock">Only show products in stock</label>
        <input type="checkbox" name="stock" id="stock" />
      </div>
    </form>
  )
}
