import { Routes, Route } from "react-router"
import About from "../pages/about"
import Home from "../pages/home"
import Login from "../pages/login"
import PageNotFound from "../pages/page-not-found"

const RootNavs = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default RootNavs