import { Routes, Route } from "react-router"
import PageNotFound from "../pages/page-not-found"
import UsersRhf from "../pages/users-rhf"
import ProductRhf from "../pages/product-rhf"

const RootNavs = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<UsersRhf />} />
        <Route path="/product" element={<ProductRhf />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default RootNavs