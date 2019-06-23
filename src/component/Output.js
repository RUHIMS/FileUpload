import React from 'react';

const Output= (props)=>{
    return(
        <div>
              {props.temp && <p>Temp:{props.temp}</p>}
        </div>
    )

}

export default Output;