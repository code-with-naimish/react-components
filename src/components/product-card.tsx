
const ProductCard = (props: {
  product: {
    id: number,
    name: string,
    description: string,
    price: number,
  }
}) => {
  return (
    <div className="card">
      <div className="flex justify-between items-start gap-5">
        <h2 className="font-semibold text-xl mb-auto ">{props.product.name}</h2>
        <p className=" text-base text-nowrap text-blue-400">₹ <span className="font-semibold">{props.product.price}</span></p>
      </div>
      <p className=" text-sm text-gray-400">{props.product.description}</p>

    </div>
  )
}

export default ProductCard