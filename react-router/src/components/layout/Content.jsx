import React from "react";
import "./Styles.css"
import { Routes, Route } from "react-router-dom";
import Home from "../../views/exemples/Home";
import About from "../../views/exemples/About";
import Param from "../../views/exemples/Param";
import PaginaNaoEncontrada from "../../views/exemples/PaginaNaoEncontrada";

const Content = props =>(
    <main className="Content">
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/param/:id" exact element={<Param />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    </main>
)

export default Content;