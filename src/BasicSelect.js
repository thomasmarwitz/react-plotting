import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import modelList from '../src/ressources/models.json'

export default function BasicSelect() {
  const [model, setModel] = React.useState('');

  const handleChange = (event) => {
    setModel(event.target.value);
    console.log(model)
  };

  const items = modelList.map(model => <MenuItem value={model}>{model}</MenuItem>)  

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={model}
          label="Model"
          onChange={handleChange}
        >
          {items}
        </Select>
      </FormControl>
    </Box>
  );
}
