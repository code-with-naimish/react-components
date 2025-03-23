import { Routes, Route } from "react-router"
import PageNotFound from "../pages/page-not-found"
import UsersRhf from "../pages/users-rhf"

const RootNavs = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<UsersRhf />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default RootNavs