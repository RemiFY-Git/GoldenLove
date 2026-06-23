/* import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { work } from '../assets/asset';

const Product = () => {

  const {productId} = useParams();

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');


  const fetchProductData = async () => {

    work.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId])
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*--------------- Product Data ------------*
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*--------------- Product Images ------------*
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
      </div>

    </div>
  ) : <div className=' opacity-0'></div>  
}

export default Product */



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { work } from "../assets/asset";

const Product = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const product = work.find(
      (item) => item._id === productId
    );

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId]);

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Thumbnails */}
        <div className="flex lg:flex-col gap-4">
          {productData.image.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Preview ${index + 1}`}
              onClick={() => setImage(item)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                image === item
                  ? "border-primary"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>

        {/* Main Image */} 
        <div>
          <img
            src={image}
            alt={productData.category}
            className="w-full max-h-[80vh] object-contain rounded-2xl"
          />
        </div>

        {/* Product Info */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold mb-4">
            {productData.category}
          </h1>

          <p className="text-muted-foreground">
            Design Category
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
