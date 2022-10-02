import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'

export const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <form>
      <FormGroup>
        <TextField
          label="Search..."
          variant="outlined"
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
          type="text"
          name="q"
          id="q"
        />
      </FormGroup>

      <FormGroup>
        <FormControlLabel
          label="Only show products in stock"
          control={
            <Checkbox
              checked={inStockOnly}
              onChange={(e) => onInStockOnlyChange(e.target.checked)}
              type="checkbox"
              name="stock"
              id="stock"
            />
          }
        />
      </FormGroup>
    </form>
  )
}
