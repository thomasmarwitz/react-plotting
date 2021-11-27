import React, { Component } from "react"
import Chart from "react-apexcharts"
import $ from 'jquery';
import modelData from "./ressources/modelData.json"
import {parseData} from './graphUtil'

const styles = {
    display: "flex",
    justifyContent: "center",
}

export default function Graph(props) {
        
    return (
        <div style={styles}>
            <Chart
                options={props.graph.options}
                series={props.graph.series}
                type={props.type}
                width={props.width}
            />
        </div>
    )
}
