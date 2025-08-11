import Layout from "@/layouts/Layout"
import Home from "@/pages/Home"
import Notfound from "@/pages/Notfound"
import TodoList from "@/pages/TodoList"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import ScrollToTop from "@/components/scrollToTop/ScrollToTop"

const Approutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="todolist" element={<TodoList/>}/>
            </Route>

            <Route path="*" element={<Notfound/>}/>

        </Routes>
    </BrowserRouter>
  )
}
export default Approutes