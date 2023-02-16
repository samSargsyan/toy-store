import React from "react";
import "./product.scss";
import toy from '../../assets/images/toyMaker.jpg';
import { useParams } from 'react-router'

const Product = ({items}) => {
console.log(items)
    let {id} = useParams();
    const {name,src,desc,price,age} = items.find((a)=>{
        if(id == a.id){
            return a
        }
    })

    return(
        <div className="productDiv">
            <img src={src} height="400px"/>
            <div className='productDescription'>
                <h1>{name}</h1>
                <p>{desc}</p>
                <div className="productBottom">
                    <div className="age">{age}+</div>
                    <div className="price">{price}$</div>
                </div>
            </div>
            
        </div>
    )
}
export default Product;