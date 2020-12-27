import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export default class Navigation extends Component {
    render() {
        return (
            <div>
         <Button style={{
        borderRadius: "0px 0px 5px 5px",
        backgroundColor: "grey",
        padding: "1px",
        width:'82px',
        height:'25px',
        opacity: '0.4.4'
        
    }}><MenuIcon style={{
      color:'white',
      opacity: '10',
      fontSize:'22px',
      width:'2rem'

      
  }}color="primary" >Hello World</MenuIcon></Button>
    

            </div>
        )
    }gi
}
