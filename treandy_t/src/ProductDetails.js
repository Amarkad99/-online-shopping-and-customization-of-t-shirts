import React from 'react'
import NavBarProductDetail from './NavBarProductDetail'
import './CSS_ProductDetails.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';
import Full from './t1.JPG'
import Tshirt from './tshirt1.gif'

export default function ProductDetail()
{
    return(
        <div>
            <NavBarProductDetail></NavBarProductDetail>
          
            <h2 >  <b className='title'><i >Clicked Product Details</i></b></h2>

            <div className='productImage'>
                <img src={Full} width={350} height={350}></img>
            </div>

            <div className='pName'>
                <h3>Product Name</h3>
            </div>

            <div className='pdetails'>
                <h4><i> to be or not to be that is the question <br /> A T-shirt, or tee, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, </i></h4>
            </div>

            <div className='price'>
                <h5><b> Price  : Rs. <b> 351</b></b></h5>
            </div>

            <div className='desc'>
                <span>A T-shirt, or tee, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean.</span>
            </div>


            <div className='productSide'>
                <img src={Full} width={200} height={200}></img>
            </div>

            <div className='productBack'>
                <img src={Full} width={200} height={200}></img>
            </div>
            {/**/} 
            
         

           



            <div className='addToCart'>
                    <Button  type="submit">Add To Cart</Button>{' '}
            </div>
            <div  className='buyNow'>
                    <Button type="submit" >Buy Now</Button>
            </div>           
    
    <Table striped bordered hover className='tablePosition'>
      <thead>
      {/*  <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
        
    </tr>*/}
      </thead>
      <tbody>
        <tr>
          <td><img src={Tshirt} heigth={200} width={200}></img></td>
          <td><img src={Tshirt} heigth={200} width={200}></img></td>
          <td><img src={Tshirt} heigth={200} width={200}></img></td>
          <td><img src={Tshirt} heigth={200} width={200}></img></td>
          <td><img src={Tshirt} heigth={200} width={200}></img></td>
        </tr>
        <tr>
          <td><b>Tshirt name</b></td>
          <td><b>Tshirt name</b></td>
          <td><b>Tshirt name</b></td>
          <td><b>Tshirt name</b></td>
          <td><b>Tshirt name</b></td>
        </tr>
      </tbody>   
    </Table>
</div>
    )
}