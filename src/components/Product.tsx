import { useState } from "react";
import { IProduct } from "../models";

interface ProductsProps {
  product: IProduct
}

function Product({ product }: ProductsProps) {
  const [isDetailsShowed, setIsDetailsShowed] = useState(false);
  const btnClassName = isDetailsShowed ? 'bg-blue-400' : 'bg-yellow-400';

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title}/>
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        className={`py-2 px-4 border ${btnClassName}`}
        onClick={() => setIsDetailsShowed(prev => !prev)}
      >
        {isDetailsShowed ? 'Hide details' : 'Show details'}
      </button>
      {isDetailsShowed &&
        <p>{product.description}</p>
      }
    </div>
  )
}

export default Product