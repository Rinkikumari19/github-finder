import React,{useState} from "react";
import axios from "axios";

function Functinal_comp(){
    const [count, setcount] = useState(0)
    const [arr, setarr] = useState([])
    const incresFuc = () =>{
        setcount(prevCount => prevCount+1)
    }
    const decrease =() =>{
        setcount(prevCount => prevCount-1)
    }


    React.useEffect(() => {
        axios.get(`https://api.github.com/users/rinkikumari19`).then((response) => {
            console.log(response, 'hiii');
            setarr(response.data);
          
        });
    }, []);
    console.log(arr)

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={incresFuc}>Increase </button>
            <button onClick={decrease}>Decrease </button>
            <button onClick={()=>setcount(0)}>Refresh</button>
            <h1><img src={arr.avatar_url} /></h1>
            <h1>{arr.login}</h1>
        </div>
    )
}
export default Functinal_comp