import React,{useState} from 'react';

import '../styledepartment/Product.css'; 

function Product() {
  
  const [nameProduct, setNameProduct] = useState("Title of the product");
  const [photoSrc, setPhotoSrc] = useState("../styledepartment/photos/geordanna-cordero-2Qg4y32pdCc-unsplash.jpg");


    
  return (
    <div className="product">
       <h3>{nameProduct}</h3>
       <img src={photoSrc} />
    </div>
  )
}

export default Product;
