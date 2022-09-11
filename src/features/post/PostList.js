import {useSelector} from "react-redux"
import SinglePost from "./SinglePost"



const PostList = () => {
    const posts=useSelector((state)=>state.posts)
    // console.log(posts)

    const orderedPosts=posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    console.log(orderedPosts)
  return (
    <div>
        <h1 className="text-center">POSTS</h1>
        <div className="m-auto container d-flex justify-content-center align-items-center gap-3 flex-wrap">
            {orderedPosts.map((item)=>{
                return(
                    <>
                        <SinglePost key={item.id} item={item}/>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default PostList