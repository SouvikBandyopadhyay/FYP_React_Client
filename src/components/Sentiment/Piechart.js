
import React, { useState } from 'react';
import { PieChart, Pie, Cell} from 'recharts';
  
  
const Piechart = ({data}) => {
  
// Sample data
console.log(data)
const piedata=[
  {name:"pos",value:data.pos,color:"green"},
  {name:"nut",value:data.nut,color:"gray"},
  {name:"neg",value:data.neg,color:"red"}
]
  
  
return (
        <PieChart width={800} height={200}>

<Pie data={piedata}
                  outerRadius={80}
                  innerRadius={30}
                  dataKey="value"
                  label="name">
                  {
                    piedata.map((entry, index) =><Cell key={index} label={entry.name} fill={entry.color}/>)
                  }
</Pie>
          
        </PieChart>
);
}
  
export default Piechart;


{/* <Pie data={piedata[0].data} dataKey="value" outerRadius={250} fill="green" /> */}

