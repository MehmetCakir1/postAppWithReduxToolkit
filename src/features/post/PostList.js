import {useSelector} from "react-redux"
import SinglePost from "./SinglePost"
import AddPost from "../post/AddPost"




const PostList = () => {
    const posts=useSelector((state)=>state.posts)
    // console.log(posts)

    
    const orderedPosts=posts?.slice().sort((a, b) => b.date.localeCompare(a.date))
    console.log(orderedPosts)
  return (
    <div>
        <AddPost/>
        <h1 className="post-header text-center border-1 border border-secondary py-2 m-auto mb-3">POSTS</h1>
        <div className="m-auto container d-flex justify-content-center align-items-center gap-3 flex-wrap">
            {orderedPosts?.map((item)=>{
                return(
                    <div key={item.id}>
                        <SinglePost  item={item}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default PostList