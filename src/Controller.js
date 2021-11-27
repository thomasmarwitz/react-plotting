import React, { Component } from "react"
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const styles = {
//    display: "flex",
//    justifyContent: "center",
}

class Controller extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            age: "10"
        }
    }

    handleChange(event) {
        this.state.age = event.target.value 
    }

    render() {
        return <div style={styles}>
            <Select 
                labelId="something"
                id="demo-simple-select"
                value={this.age}
                label="Label"
                sx={{minWidth: 200}}
                onChange={this.handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Button variant="contained">Calculate + Offset</Button>
        </div>
    }
}

export default Controller