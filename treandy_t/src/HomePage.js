import React from 'react'
import './CSS_HomePage.css'
import Shirt from './tshirt1.gif'
import SolidShirt from './3dTshirt.jpg'
import SleeveShirt from './fullSleeve.gif'
import HeartShirt from './heartTshirt.gif'
import NavBarHomePage from './NavBarHomePage'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCorse from './HomeCorse'

export default function Tru()
{
    const uname = useSelector((state)=>{return state.Emailid});
    return(
        <div  >
            <NavBarHomePage></NavBarHomePage>
            <HomeCorse></HomeCorse>
 {/**           <div align="left" className='leftButtons'>
                <button className='btn'id="homeButton">Home</button>
                <button className='btn'id="menuButton">Menu</button> 
            </div>
            <div align="right" className='rightButtons' >
                    <button className='btn'>Profile</button>
                    <button className='btn'>Cart</button>
                    <button className='btn'>Setting</button>
                    <button className='btn'>Notificstion</button>
            </div>
*/} 
           <h2 className='title'><b><i>TRENDY-T</i></b></h2> 
           <h2>welcome {} </h2>
           <div  className='center_left'> 
                   
                    <Button href="">Customised T-Shirts</Button>{''}
                    <button>Customised T-Shirts</button>
            </div>
                  
            <div className='center_right' >
                 
                    <Button href="http://localhost:3000/readymade">ReadyMade T-Shirts</Button>{''}
                    <button>ReadyMade T-Shirts</button>
            </div>

            <div  className='c' >Please like and follow us on 
                  <button className='btn1' >Like</button>
                                <button className='btn2' >Facebook</button>
                                <button className='btn3' >Instagram</button>
            </div>

            <div className='a'>
                    <button className='btn4'>Call Symbol</button> For any kind of support call 1800-020-1468

            </div>

            
           <img  src={Shirt} height={300} width={300} /><br />
         {/**/} <img className='center' src={SolidShirt} height={300} width={300} />
            <img className='sleeve' src={SleeveShirt} height={300} width={300} />
            <img className='heart' src={HeartShirt} height={300} width={300} />
            
        </div>
    )
}