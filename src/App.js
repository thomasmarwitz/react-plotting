import React, {Component} from 'react'
import BasicSelect from './BasicSelect'
import Button from '@mui/material/Button'

const styles = {
    display: "flex",
    padding: "5px",
}

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles}>
                <BasicSelect style={{margin: "5px"}}/>
                <Button variant="contained" style={{margin: "5px"}}>Calculate Offset</Button>
            </div>
        )
    }
}

export default App