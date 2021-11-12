import React, { Component, useState, useEffect} from "react";
import { Card } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import {useLocation} from "react-router-dom";
import axios from "axios";

function All_Repos({ allrepo }) {
  const value = useLocation().search; 
  const username = value.split('?name=' );
  const [refresh_data, setrefresh_data] = useState([])

  useEffect(()=>{
    axios.get(`https://api.github.com/users/${username[username.length-1]}/repos`).then((response)=>{
      const repos_data = response.data;
      setrefresh_data(repos_data)
      console.log(repos_data);
    })


  },[])

  // console.log(refresh_data)
const alrtFunc = () => {
  alert("copied")
}
  return (
    <div>
      <h1 className="title-repo">
        <button className="repos">All Reops</button>{" "}
      </h1>

      <div className="all-repo">
        {refresh_data.map((item, index)=>{
          return(<div className="repo-card" key={index}>
          <h2>{item.name}</h2> <br />
          
          <p className="repo-url">
            {item.clone_url}
            <CopyToClipboard className="copy-icon" text={item.clone_url}>
              <FaCopy onClick={alrtFunc}/>
            </CopyToClipboard>
          </p>
        </div>)
        })}
      </div>
      

      <Card className="all-repo">
        {allrepo && allrepo.map((item, index) => {
         
          return (
            <div className="repo-card" key={index}>
              <h2>{item.name}</h2> <br />
              
              <p className="repo-url">
                {item.clone_url}
                <CopyToClipboard className="copy-icon" text={item.clone_url}>
                  <FaCopy onClick={alrtFunc}/>
                </CopyToClipboard>
              </p>
            </div>
          );
        })}
      </Card>
    </div>
  );
}

export default All_Repos;