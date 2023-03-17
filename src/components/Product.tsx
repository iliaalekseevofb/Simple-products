import { IProduct } from "../models";

interface ProductsProps {
  product: IProduct
}

function Product({ product }: ProductsProps) {
  console.log(product);

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title}/>
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default Product