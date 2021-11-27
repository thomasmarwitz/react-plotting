import React, { Component } from "react"
import { Line } from "react-chartjs-2"

const styles = {
    display: "flex",
    justifyContent: "center",
}

export default function Graph(props) {
        
    /*
    const data2 = {
    labels: [],// years,
    datasets: [
          {
              label: "",// name
              data: [], // y values
              borderColor: "hex",
              fill: false,
          }
        ]
    };*/

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Line 1",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          }
        ]
    };



    return (
        <div style={styles}>
            <Line
                data={data}
                width={400}
                height={400}
                options={{}}
            />
        </div>
    )
}
