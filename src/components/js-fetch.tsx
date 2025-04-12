import { useEffect, useState } from "react";
import { toast } from 'react-toastify';



interface User {
  id: number;
  name: string;
  email: string
}

const JsFetch = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error("Something went wrong! Please try again later ")
      }
      const data = await response.json();
      // console.log(data);
      setUsers(data);
    } catch (error) {
      toast("Please create some user", {
        type: "warning"
      })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);



  return (
    <div className="max-w-3xl  mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <div className="card">
        {loading && <p>loading</p>}
        {!loading && (!users || users.length === 0) && <p>No users created</p>}
        {!loading && (users && users.length > 0) &&
          <ul>
            <div className="grid grid-cols-2 text-blue-500 font-bold mb-3">
              <p>User-name</p>
              <p>User-email</p>
            </div>

            {users.map(user => (
              <li key={user.id} className="grid grid-cols-2 mb-2 ">
                <strong>{user.name}</strong>  <span className="text-gray-500 text-sm">{user.email}</span>
              </li>
            ))}
          </ul>}

      </div>


    </div>


  )
}

export default JsFetch