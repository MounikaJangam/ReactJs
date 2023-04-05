import logo from './logo.svg';
import './App.css';
// import { Greet } from './Components/Greet';
// import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import { Component } from 'react';
// import Hello from './Components/Hello';

// function App() {
  class App extends Component { 
    render() {
  return (
    <div className="App">
      {/* <Greet name="Mouni" heroName="BatWomen">
        <p>This is children props</p>
      </Greet>
      <Greet name="Rani" heroName="Clam Women"></Greet>
      <Greet name="Sam" heroName="Super Women"></Greet>  */}
      <Welcome name="Mouni" heroName="BatWomen"></Welcome> 
      <Welcome name="Rani" heroName="Clam Women"></Welcome> 
      <Welcome name="Sam" heroName="Super Women"></Welcome> 
      {/* <Hello></Hello> */}
    </div>
  );
}
}

export default App;
