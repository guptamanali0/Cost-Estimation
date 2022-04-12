import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HistoricalOrder from './components/historicalorder'




class App extends Component{
constructor(){
  super();
}


  render(){
    return(
    <BrowserRouter>
    <Routes>
    <Route path="/history" element={<HistoricalOrder/>}/>
    </Routes>
    </BrowserRouter>
    )
  }
}
export default App;
