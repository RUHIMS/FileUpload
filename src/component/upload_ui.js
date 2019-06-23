import React from 'react';

const Upload_Ui =(props)=>{
return(
    <React.Fragment>
      <form onSubmit={props.getData}> 
          <label>Upload your file</label>
          <br />
         <input type="file">
         </input>
         <button type="submit">Submit</button>
      </form>

    </React.Fragment>
)

}

export default Upload_Ui;


