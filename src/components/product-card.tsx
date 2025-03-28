
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
      <p className="flex items-center justify-between gap-4"> <span className="opacity-60">Name</span> <span className=" text-right">{props?.product?.name}</span> </p>
      <p className="flex items-center justify-between gap-4"> <span className="opacity-60">Description</span> <span className=" text-right">{props?.product?.description}</span> </p>
      <p className="flex items-center justify-between gap-4"> <span className="opacity-60">Price</span> <span className=" text-right">{props?.product?.price}</span> </p>

    </div>
  )
}

export default ProductCard