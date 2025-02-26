import React, { useEffect, useState } from "react";

function Github(){
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/priyankguptaa")
        .then(Response => Response.json())
        .then(data =>{
            setData(data)            
        })
    },[])

    return(
        <div>
            GitFollowers: {data.followers}
            <img src={data.avatar_url} alt=""  />
        </div>
)}

export default Github