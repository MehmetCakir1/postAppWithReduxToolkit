import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {store} from "./app/store"
import { Provider } from "react-redux"
import PostList from "./features/post/PostList"
import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";


const App = () => {
  return (
    <div>
      <Provider store={store}>
      <AppRouter>
        <PostList/>
        <ToastContainer/>
        </AppRouter>
      </Provider>
    </div>
  )
}

export default App