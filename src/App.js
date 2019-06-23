import React from 'react';
import logo from './logo.svg';
import './App.css';
import Upload_Ui from './component/upload_ui';
import Output from './component/Output';
import { async } from 'q';
//https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22

class App extends React.Component{

  state={
    temp:undefined
  }

  getData=async(e)=>{
    e.preventDefault();
    const data=await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c426838f54249636813d2c39bf5917f0');
    const res=await data.json();
    console.log(res);
    
    this.setState({
      temp:res.main.temp
    })

 }

render(){

  return(
    <div>
      <Upload_Ui getData={this.getData}/>
      <Output temp={this.state.temp} />
    </div>
  )
}

}

export default App;