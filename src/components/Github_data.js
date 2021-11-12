import React, {useState} from "react";
import axios from "axios";
import All_Repos from "./All_Repos";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



function Github_data() {
  const [resp, setGitData] = useState({ data: null, allRep: null });
  const [username, setusername] = useState("");
  const [repo, setrepo] = useState(false);


  const fetchData = async () => {
    const respGlobal = await axios(
      `https://api.github.com/users/${username}`
    );

    const allRepos = await axios(
      `https://api.github.com/users/${username}/repos`
    );

    setGitData({ data: respGlobal.data, allRep: allRepos.data });
  };
  

  const onSubmit = () => {
    fetchData()
  }

  const repoFunc = ()=>{
     setrepo(true)
  }
// console.log(resp,"response")
  return (
    <div>
      <Router>
			
        <Switch>
          <Route path="/repo">
              <div><All_Repos allrepo = {resp.allRep} /></div>
          </Route>
         
          <Route path="/">
            <div className='main-container'>
                <input
                  className="input-box"
                  type="text"
                  onChange={(e) => setusername(e.target.value)}
                  placeholder="Username..."
                ></input>
                <button className="show-btn" onClick={onSubmit}>
                  Show data
                </button>
            </div>

          {resp.data ? (
          <div>
              <img src={resp.data.avatar_url}></img>
              <h1><img className='user-logo' src='https://static.thenounproject.com/png/1081856-200.png' /> &nbsp; {resp.data.login}</h1>
              <h1 onClick={repoFunc}>
                <img className='repo' src = "https://static.thenounproject.com/png/198209-200.png" />  &nbsp;<Link to={`/repo?name=${resp.data.login}`}>  {resp.data.public_repos}</Link>
              </h1>
              <h1><img className='follower-logo' src='https://image.pngaaa.com/585/4117585-middle.png' /> &nbsp; {resp.data.followers}</h1>
              <h1><img className='following-logo' src='https://cdn0.iconfinder.com/data/icons/people-lifestyle/100/People-07-512.png' />  &nbsp; {resp.data.following}</h1>
              
          </div>
          ) : (
            <div></div>
          )}
          </Route>
          
        </Switch>
      </Router>

      {/* {repo?<div><All_Repos allrepo = {resp.allRep} /></div>:<div></div>} */}
    </div>
  );
}

export default Github_data;


