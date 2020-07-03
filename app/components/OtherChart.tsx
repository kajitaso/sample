import React from 'react';
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
    Tooltip
  } from "recharts";

const OtherChart: React.FC<any> = ({ dataRadar }) => {

    return (
    <div style={{ width:"500px",margin:"0 auto"}}>
        <RadarChart
        height={400}
        width={500}
        data={dataRadar}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="rank"
        />
        <Radar
          name="Score"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Tooltip />
      </RadarChart>
    </div>
    )
  }

export default OtherChart