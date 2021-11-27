import React, { Component } from "react"
import Chart from "react-apexcharts"
import $ from 'jquery';
import modelData from "./ressources/modelData.json"
import {parseData} from './graphUtil'

const styles = {
    display: "flex",
    justifyContent: "center",
}

class Graph extends Component {
    constructor(props) {
        super(props)

        this.state = parseData({
            model: "CCMI-1_CESM1-CAM4Chem_refC1_r2i1p1",
            year: "1980", 
        })
    }

    componentDidMount() {
        // do nothing
    }

    render() {
        return (
            <div style={styles}>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                width="1000"
                />
            </div>
        )
    }
}

export default Graph;
