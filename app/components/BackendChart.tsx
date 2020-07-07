import React from 'react';
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
    Tooltip,
    ResponsiveContainer
  } from "recharts";

const FrontendChart: React.FC<any> = ({ dataRadar }) => {

    return (
    <div style={{height: "410px"}}>
      <ResponsiveContainer>
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
      </ResponsiveContainer>
    </div>
    )
  }

export default FrontendChart