import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function App() {

  




  return (
    <div className="App">
      <Button style={{
        borderRadius: "0px 0px 5px 5px",
        backgroundColor: "grey",
        padding: "5px",
        width:'100px',
        opacity: '0.4.4'
        
    }}><MenuIcon style={{
      color:'white',
      
  }}color="primary" >Hello World</MenuIcon></Button>
    
      <Header />

    </div>
  );
}

export default App;
