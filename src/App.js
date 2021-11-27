import React, {Component} from 'react'
import BasicSelect from './BasicSelect'
import Button from '@mui/material/Button'
import Graph from './Graph'
import { parseData } from './graphUtil'
import modelData from './ressources/modelData.json'

const styles = {
    display: "flex",
    padding: "5px",
    justifyContent: "center",
}

export default function App() {
    
    const [model, setModel] = React.useState('');
    const [year, setYear] = React.useState('');
    const [graph, setGraph] = React.useState(parseData(modelData))

    const handleModelChange = (event) => {
        setModel(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleCalculateOffset = (event) => {
        if (!model || !year) {
            return
        }
        setGraph(
            parseData(
                modelData, // provide data
                {
                    model, // model: model
                    year,  // year: year
                }
            )
        )
    }
    
    return (
        <div>
            <Graph 
                graph={graph}
                width={"1000"}
                type={"line"}
            />
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