// import react router dom
import { Routes, Route } from "react-router-dom";
// import view homepage
import Home from "../views/home.jsx";
// import view posts index
import PostIndex from "../views/posts/index.jsx";
// import view posts create
import PostCreate from "../views/posts/create.jsx";
// import view post edit
import PostEdit from "../views/posts/edit.jsx";

function RoutesIndex(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/posts" element={<PostIndex/>} />
            <Route path="/posts/create" element={<PostCreate/>} />
            <Route path="/posts/edit/:id" element={<PostEdit/>} />
        </Routes>
    )
}

export default RoutesIndex