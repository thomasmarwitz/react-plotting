import React, {Component} from 'react'
import BasicSelect from './BasicSelect'
import Button from '@mui/material/Button'
import Graph from './Graph'
import { parseData } from './graphUtil'
import modelData from './ressources/modelData.json'
import { showPdf } from './pdfMaker'

const styles = {
    display: "flex",
    padding: "5px",
    justifyContent: "center",
}

/**
 * Shuffles array in place. ES6 version
 * Not the best performance
 * 
 * @param {Array} a items An array containing the items.
 */
 function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
const USE_N_MODELS = 100
const DATA = shuffle(modelData).slice(0, USE_N_MODELS)

export default function App() {
    
    const [model, setModel] = React.useState('');
    const [year, setYear] = React.useState('');
    const [graph, setGraph] = React.useState(parseData(DATA))
    console.log(modelData.slice(0, 10))

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
                DATA, // provide data
                {
                    model, // model: model
                    year,  // year: year
                }
            )
        )
    }

    const handleMakePdf = (event) => {
        showPdf(DATA.map(modelObj => {
            return {
                text: `${modelObj.model} (${modelObj.plotstyle.linestyle})`,
                color: modelObj.plotstyle.color,
            }
        })) // list of used models
    }
    
    return (
        <div>
            <Graph 
                graph={graph}
                data={DATA}
                width={"1000"}
                type={"line"}
            />
            <div style={styles}>
                <BasicSelect 
                    model={model}
                    year={year}
                    data={DATA}
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
                <Button 
                    variant="outlined"
                    style={{margin: "5px"}}
                    onClick={handleMakePdf}
                >
                    Generate PDF
                </Button>
                
            </div>
        </div>
    )
    
}