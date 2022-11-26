import React from "react";
import logo192 from './logo192.png'
import './logo.less'

export default function Logo() {
    return (
        <div className="logo-container" >
            <img src={logo192} width={70} height={70} fit='fill' />
        </div>
    )
}