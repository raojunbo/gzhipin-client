import React, { Component } from "react";
import { Navigate, Routes, Route } from 'react-router-dom'
import LaobanInfo from "../laoban-info/laoban-info";
import DashenInfo from "../dashen-info/dashen-info";
class Main extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path='/dasheninfo' element={<DashenInfo />}></Route>
                    <Route path='/laobaninfo' element={<LaobanInfo />}></Route>
                </Routes>
            </div>
        )
    }
}
export default Main