import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Button from 'react-bootstrap/Button';
 import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home()
{
    const Emailid = useSelector((state)=>{return state.Emailid});
    const dispatch= useDispatch()
    let navigate = useNavigate() 

    function handler(){

        navigate("/Profile") 
    }

    return(
        <div>
         <NavBar></NavBar>
         <h1>Home Page welcome {Emailid}</h1>
         <Button variant="primary" onClick={handler}>Login</Button>{' '}
         </div>
    )
}