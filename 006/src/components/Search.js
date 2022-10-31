import { FormControl, InputLabel, Input } from '@mui/material';

function Search() {
  return (
    <FormControl sx={{ minWidth: "70%"}}>
      <InputLabel htmlFor='search'> Location Search</InputLabel>
      <Input
        
        id='search'
        sx={{ backgroundColor: 'white' }}
        placeholder='Search for a location...'
      />
    </FormControl>
  );
}

export default Search;
