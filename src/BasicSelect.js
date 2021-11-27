import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import modelList from '../src/ressources/models.json'

export default function BasicSelect(props) {
  
  const models = modelList.map(model => <MenuItem value={model} key={model}>{model}</MenuItem>)  
  const validYears = [...Array(141).keys()].map(value => `${value + 1960}`) // 1960 - 2100
  const years = validYears.map(year => <MenuItem value={year} key={year}>{year}</MenuItem>)

  return (
    <Box>
      <FormControl sx={{ minWidth: 300 }} style={{margin: "5px"}}>
        <InputLabel id="model-select-label">Model</InputLabel>
        <Select
          labelId="model-select-label"
          id="model-select"
          value={props.model}
          label="Model"
          onChange={props.handleModelChange}
        >
          {models}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 100}} style={{margin: "5px"}}>
      <InputLabel id="year-select-label">Year</InputLabel>
        <Select
          labelId="year-select-label"
          id="year-select"
          value={props.year}
          label="Year"
          onChange={props.handleYearChange}
        >
          {years}
        </Select>
      </FormControl>
    </Box>
  );
}
