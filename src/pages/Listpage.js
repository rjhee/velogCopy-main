import React, {useState, useEffect}from 'react';
import Header from "../components/common/Header";
import ListPost from "../components/ListPost";


export default function Listpage() {
   
    return (
        <div>
            <Header/>
            <ListPost/>
        </div>
    );
}
