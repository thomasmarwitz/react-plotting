import React, {Component} from 'react'
import BasicSelect from './BasicSelect'
import Button from '@mui/material/Button'
import Graph from './Graph'

const styles = {
    display: "flex",
    padding: "5px",
    justifyContent: "center",
}

export default function App() {
    
    const [model, setModel] = React.useState('');
    const [year, setYear] = React.useState('');

    const handleModelChange = (event) => {
        setModel(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleCalculateOffset = (event) => {
        console.log(model + " " + year)
    }

    
    return (
        <div>
            <Graph />
            <div style={styles}>
                <BasicSelect 
                    model={model}
                    year={year}
                    handleModelChange={handleModelChange} 
                    handleYearChange={handleYearChange}    
                />
                <Button 
                    variant="contained"
                    style={{margin: "5px"}}
                    onClick={handleCalculateOffset}
                >
                    Calculate Offset
                </Button>
            </div>
        </div>
    )
    
}