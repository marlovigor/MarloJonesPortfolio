import React from 'react'
import Navigation from './Navigation'
import './styles/header.css';

export default function Header() {
    return (
        <div className="outer_div">
            <Navigation />
            <div className="inner_div">
            <h1 className="name_header">Hi, Im Marlo</h1>
            </div>
        </div>
    )
}
