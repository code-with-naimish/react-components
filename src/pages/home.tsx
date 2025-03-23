import { useForm, SubmitHandler } from "react-hook-form"
import PrimaryBtn from "../components/primary-btn"



type Inputs = {
  name: string,
  email: string,
  age: number,
  phoneNumber: number,
}


export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)





  return (
    <div className="max-w-3xl  mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Create User</h2>
      <div className="bg-white rounded-lg p-5 " >
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
              <label className=" font-medium" htmlFor="email">E-mail
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input type="email" className="form-control" {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format"
                }
              })} />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}

            </div>

            <div className="flex flex-col gap-1.5">
              <label className=" font-medium" htmlFor="age">Age
              </label>

              <input type="number" className="form-control" {...register("age")} />

            </div>

            <div className="flex flex-col gap-1.5">
              <label className=" font-medium" htmlFor="phone-number">Phone-number
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input type="number" className="form-control" {...register("phoneNumber", { required: "Phone-number is required" })} />
              {errors.phoneNumber && <span className="text-sm text-red-500">{errors.phoneNumber.message}</span>}

            </div>
          </div>
          <div className="flex justify-end mt-6">

            <PrimaryBtn title="Submit" />


          </div>
        </form>
      </div>
    </div>
  )
}