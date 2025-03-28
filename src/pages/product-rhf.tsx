import { useForm, SubmitHandler } from "react-hook-form"
import PrimaryBtn from "../components/primary-btn"
import { useState } from "react"
import ProductCard from "../components/product-card"


type Inputs = {
  id: number,
  name: string,
  description: string,
  price: number,
}


export default function UsersRhf() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const [products, setproducts] = useState<Inputs[]>([])

  const onSubmit: SubmitHandler<Inputs> = (data) => {

    data.id = Date.now()

    setproducts(prev => [data, ...prev]);
    reset();
  }




  return (
    <div className="max-w-3xl  mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Create products</h2>
      <div className="card" >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">

            <div className="flex flex-col gap-1.5">
              <label className=" font-medium" htmlFor="name">Name
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input className="form-control " {...register("name", { required: "Name is required" })} />
              {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}

            </div>

            <div className="flex flex-col gap-1.5">
              <label className=" font-medium" htmlFor="description">Description
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input type="description" className="form-control" {...register("description", { required: "description is required" })} />
              {errors.description && <span className="text-sm text-red-500">{errors.description.message}</span>}

            </div>

            <div className="flex flex-col gap-1.5">
              <label className=" font-medium" htmlFor="price">Price
              </label>

              <input type="number" className="form-control" {...register("price", { required: "price is required" })} />
              {errors.price && <span className="text-sm text-red-500">{errors.price.message}</span>}

            </div>


          </div>
          <div className="flex justify-end mt-6">

            <PrimaryBtn title="Submit" />


          </div>
        </form>
      </div>
      <br />
      <div>
        {products.length === 0 ? <div className="card text-center">
          <p>No product created yet!</p>
        </div> :
          <div className="grid  sm:grid-cols-2 grid-col-1 gap-4">
            {products?.map((item, i) => {
              return <ProductCard key={i} product={item} />
            })}

          </div>}
      </div>

    </div>
  )
}