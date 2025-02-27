import React, { useEffect, useState } from "react";
import './Github.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function Github(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/priyankguptaa")
        .then(Response => Response.json())
        .then(data =>{setData(data)

            console.log(data)
        })
    },[])

    return(
        <div className="github_sec">
            <Container className="container-div">
            <h3 className="main-heading">GITHUB INFO</h3>
            <Row>
                <Col lg="7" className="right_sec">
                    <p><span>Github Name : </span>{data.name}</p>
                    <p><span>Github Login Name :</span>{data.login}</p>
                    <p><span>Github Created at :</span> {data.created_at}</p>
                    <p><span>Github last Updated : </span>{data.updated_at}</p>
                    <p><span>Github Public Repository : </span>{data.public_repos}</p>
                    <p><span>Github View Type : </span>{data.user_view_type}</p>
                    <p><span>Github Followers : </span>{data.followers}</p>
                    <p><span>Github Following : </span>{data.following}</p>
                    <p><span>Github Image : </span>On right side</p>
                    <h6>GITHUB DETAILS GETTING THROUGH USE OF GITHUB API</h6>
                </Col>
                <Col lg="5" className="left_sec">
                <img src={data.avatar_url} alt=""  />
                </Col>
            </Row>
            </Container>
            
        </div>
)}

export default Github