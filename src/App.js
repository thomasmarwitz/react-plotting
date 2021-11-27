import React, {Component} from 'react'
import BasicSelect from './BasicSelect'
import Button from '@mui/material/Button'

const styles = {
    display: "flex",
    padding: "5px",
}

export default function App() {
    
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

    
    return (
        <div style={styles}>
            <BasicSelect 
                model={model}
                year={year}
                handleModelChange={this.handleModelChange} 
                handleYearChange={this.handleYearChange}    
            />
            <Button variant="contained" style={{margin: "5px"}}>Calculate Offset</Button>
        </div>
    )
    
}