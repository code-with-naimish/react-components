
const UserCard = (props: {
  user: {
    id: number,
    name: string,
    email: string,
    age: number,
    phoneNumber: number,
  }
}) => {
  return (
    <div className="card">
      <p className="flex items-center justify-between gap-4"> <span className="opacity-60">Name</span> <span className=" text-right">{props?.user?.name}</span> </p>
      <p className="flex items-center justify-between gap-4"> <span className="opacity-60">Age</span> <span className=" text-right">{props?.user?.age}</span> </p>
      <p className="flex items-center justify-between gap-4"> <span className="opacity-60">Phone</span> <span className=" text-right">{props?.user?.phoneNumber}</span> </p>
      <p className="flex items-center justify-between gap-4"> <span className="opacity-60">Email</span> <span className=" text-right">{props?.user?.email}</span> </p>

    </div>
  )
}

export default UserCard