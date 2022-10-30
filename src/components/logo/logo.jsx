import React from "react";
import { Image } from 'antd-mobile'
import logo192 from './logo192.png'
import './logo.less'

export default function Logo() {
    return (
        <div className="logo-container" >
            <Image src={logo192} width={100} height={100} fit='fill' />
        </div>
    )
}