import { Routes, Route } from "react-router"
import PageNotFound from "../pages/page-not-found"
import UsersRhf from "../pages/users-rhf"
import ProductRhf from "../pages/product-rhf"
import GameList from "./game-list"
import JsFetch from "./js-fetch"
import ToDoList from "./to-do-list"

const RootNavs = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<UsersRhf />} />
        <Route path="/product" element={<ProductRhf />} />
        <Route path="/game" element={<GameList />} />
        <Route path="/fetch" element={<JsFetch />} />
        <Route path="/list" element={<ToDoList />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default RootNavs