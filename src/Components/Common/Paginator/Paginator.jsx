import React from "react";
import { useState } from "react";
import style from "./Paginator.module.css";


    // type TypeProps = {
    //     totalUsersCounts: number,
    //     pageSize: number,
    //     currentPage: number,
    //     onPageChanged: (pageNumber: number) => void,
    //     portionSize?: number,
    // }

    const Pagiantor = ({totalUsersCounts, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

        let pagesCount = Math.ceil (totalUsersCounts / pageSize);


        let pages = [];

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        let portionCount = Math.ceil(pagesCount / portionSize);
        let [portionNumber, setPortionNumber] = useState(1);
        let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
        let rigthPortionNumber = portionNumber * portionSize;
        
        
        return(
            <div>
                {portionNumber  > 1 && 
                <button onClick = { () => { setPortionNumber(portionNumber - 1)}}>PREV</button>}
                {pages
                .filter(p => p >= leftPortionNumber && p <= rigthPortionNumber)
                .map(p => {
                    return <span key = {p} className = {currentPage === p && style.selectedPage} 
                    onClick={ (e)=> { onPageChanged(p); }}>{p}</span> })}
                {portionCount > portionNumber && 
                <button onClick = { () => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
            </div>
        )
    };


    export default Pagiantor;
