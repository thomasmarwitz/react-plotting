import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

import { parseData } from "./graphUtilRecharts";
import { colourNameToHex } from "./graphUtilApexCharts";


const styles = {
    display: "flex",
    justifyContent: "center",
}

const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
];

export default function Graph(props) {
    console.log("parsing")
    const data = parseData(props.data)
    //data.xAxis
    //console.log(data.data)
    const lines = props.data.map(el => <Line type="monotone" dataKey={el.model} dot={false} stroke={colourNameToHex(el.plotstyle.color)}/>)

    return (
        <div style={styles}>
            <LineChart
            width={1200}
            height={600}
            data={data.data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis domain={[250, 400]}/>
            <Tooltip />
            <Legend />
            {lines}
            </LineChart>
        </div>
    );
}