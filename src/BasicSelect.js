import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import modelList from '../src/ressources/models.json'

export default function BasicSelect() {
  const [model, setModel] = React.useState('');
  const [year, setYear] = React.useState('');

  const handleModelChange = (event) => {
    setModel(event.target.value);
    console.log(event.target.value)
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    console.log(event.target.value)
  }

  const models = modelList.map(model => <MenuItem value={model}>{model}</MenuItem>)  
  const validYears = [...Array(141).keys()].map(value => `${value + 1960}`) // 1960 - 2100
  const years = validYears.map(year => <MenuItem value={year}>{year}</MenuItem>)

  return (
    <Box>
      <FormControl sx={{ minWidth: 300 }} style={{margin: "5px"}}>
        <InputLabel id="model-select-label">Model</InputLabel>
        <Select
          labelId="model-select-label"
          id="model-select"
          value={model}
          label="Model"
          onChange={handleModelChange}
        >
          {models}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 100}} style={{margin: "5px"}}>
      <InputLabel id="year-select-label">Year</InputLabel>
        <Select
          labelId="year-select-label"
          id="year-select"
          value={year}
          label="Year"
          onChange={handleYearChange}
        >
          {years}
        </Select>
      </FormControl>
    </Box>
  );
}
