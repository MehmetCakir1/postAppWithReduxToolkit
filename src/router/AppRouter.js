import {BrowserRouter,Routes,Route} from "react-router-dom";
import PostList from "../features/post/PostList"
import PostDetail from "../features/post/PostDetail";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<PostList/>}/>
        <Route path="/detail" element={<PostDetail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter