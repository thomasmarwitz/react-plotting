import React, { Component } from "react"
import Button from '@mui/material/Button';

const styles = {
    display: "flex",
    justifyContent: "center",
}

class Controller extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div style={styles}>
            <Button variant="containted">Calculate Offset</Button>
        </div>
    }
}

export default Controller