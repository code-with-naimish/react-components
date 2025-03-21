import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  name: string,
}


export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)





  return (
    <div className="bg-white rounded-lg p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name
              <span className="ml-1 text-red-500">*</span>
            </label>

            <input className="w-full border border-gray-300 rounded-lg px-3 py-1" {...register("name", { required: true })} />
            {errors.name && <span className="text-sm text-red-500">This field is required</span>}

          </div>
        </div>




        <input type="submit" />
      </form>
    </div>
  )
}