import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
   this.state = {
name : 'Paru',
company :'IBM',
place : 'Chennai'
    }
  }
  render(){
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hi - I am {this.state.name} - working for {this.state.company} , residing at {this.state.place}
        </p>
        <button onClick={()=>{
          this.setState({name:'Kavya', company :'LNT' , place :'Bangalore'})
                console.log(this.state);

        } 
    }
        >Change </button>
      </header>
    </div>
  );
  }
}

export default App;
