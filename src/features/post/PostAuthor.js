import {useSelector} from "react-redux";



const PostAuthor = ({userId}) => {
    const users=useSelector((state)=>state.users);
    const author=users?.find((user)=>user.id===userId)
    // console.log(users)
    // console.log(users.filter((user=>user.id)));
    // console.log(userId)
  return (
    <p className="p-0 m-0 text-end">
        by <span className="fw-bold">{author ? author.name : "Unkown Author"}</span> 
    </p>
  )
}

export default PostAuthor