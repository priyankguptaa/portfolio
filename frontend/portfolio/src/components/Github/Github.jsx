import React, { useEffect, useState } from "react";

function Github(){
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/priyankguptaa")
        .then(Response => Response.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })
    },[])

    return(
        <div>
            GitFollowers: {data.followers}
        </div>
)}

export default Github