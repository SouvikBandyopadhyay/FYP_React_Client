import React from 'react'

import Piechart from "./Piechart";


const Output = (props) => {
  const pending=props.pending
  const data=props.data
  return (
    <div>
      {(pending===false && data!=false) && <div>
                <div>
                    <p>Posetive:{data.pos}</p>
                </div>
                <div>
                    <p>Negetive:{data.neg}</p>
                </div>
                <div>
                    <Piechart data={data}></Piechart>
                </div>
            </div>}
    </div>
  )
}

export default Output
