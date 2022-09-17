import React from "react";
import yelloshirt from './image/Tshirt.png'
import white from './image/Tshirt.png'
import './product.css'
import { Button } from "react-bootstrap";

const firstproduct={
    img:{yelloshirt},
    title:"polo tshirt",
    price:"34$"
}

const secondproduct={
    img:{white},
    title:"polo tshirt",
    price:"34$"
}

const thirdproduct={
    img:{yelloshirt},
    title:"polo tshirt",
    price:"84$"
}

const forthproduct={
    img:{yelloshirt},
    title:"polo tshirt",
    price:"64$"
}

const fifthproduct={
    img:{white},
    title:"polo tshirt",
    price:"54$"
}

const sixthproduct={
    img:{yelloshirt},
    title:"polo tshirt",
    price:"34$"
}

export default function Productlist()
{





    return(<div>
<section className="productlist">

<Product
    img={yelloshirt}
    title={firstproduct.title}
    price={firstproduct.price}>
</Product>

<Product
    img={white}
    title={secondproduct.title}
    price={secondproduct.price}>
</Product>
<Product
    img={white}
    title={firstproduct.title}
    price={firstproduct.price}>
</Product>

</section>
<section className="productlist">

<Product
    img={yelloshirt}
    title={forthproduct.title}
    price={forthproduct.price}>
</Product>

<Product
    img={white}
    title={fifthproduct.title}
    price={fifthproduct.price}>
</Product>
<Product
    img={white}
    title={sixthproduct.title}
    price={sixthproduct.price}>
</Product>

</section>


    </div>)
}


const Product= (props)=>{
    return(
        <article className="product">
            <center>  <img src={props.img}  height={180} width={180} alt="loading"></img>
      </center>
           <h3>{props.title}</h3>
           <h4> {props.price}</h4>
           <Button type="submit">Add to cart</Button>
        </article>

        
    )
}