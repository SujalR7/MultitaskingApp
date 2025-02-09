import { useEffect, useState } from "react"

export const DateTodo=()=>{
    const[DateTime,setDateTime]=useState("");
    useEffect(()=>{
       const intervalId=setInterval(()=>{
        const date=new Date();
        let d=date.toLocaleDateString();
        let t=date.toLocaleTimeString();
        setDateTime("Date: "+d+" Time:"+t);
       },1000);
       return()=>clearInterval(intervalId)
    },[])
    return<>
    <h3>{DateTime}</h3></>
}