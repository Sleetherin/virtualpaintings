import React,{useState} from 'react';

import '../styledepartment/Product.css'; 

import defaultPic from '../styledepartment/photos/defaultpic.jpg'; 


function Product() {
  
  const [nameProduct, setNameProduct] = useState("Title of the product");
  const [photoSrc, setPhotoSrc] = useState(defaultPic);
  const [description, setDescription] = useState("This description is only for display. It will be replaced by some actual description.")


    
  return (
    

    <div className="product">
      <h3>{nameProduct}</h3>
      <img src={photoSrc} width="200" height="200" className="productPhoto"/>
      <p className="description">{description}</p>
      <button className="button">buy</button>
    </div>
  )
}

export default Product;
