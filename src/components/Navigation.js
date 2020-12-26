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
                    padding: "3px",
                    width: '60px',
                    height:"30px",
                    opacity: '0.4.4'

                }}><MenuIcon style={{
                    color: 'white',
                    fontSize: '18px'

                }} color="primary" >Hello World</MenuIcon></Button>

            </div>
        )
    }
}
