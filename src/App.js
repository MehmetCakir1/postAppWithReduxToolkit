import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {store} from "./app/store"
import { Provider } from "react-redux"
import PostList from "./features/post/PostList"
import AddPost from "./features/post/AddPost"
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AddPost/>
        <PostList/>
        <ToastContainer/>
      </Provider>
    </div>
  )
}

export default App