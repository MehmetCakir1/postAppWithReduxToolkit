import { Link, useNavigate } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

const SinglePost = ({item}) => {
    const {title,content,userId,date}=item;
    const navigate=useNavigate()
  return (
    <div className='card text-center p-3 py-4'>
        <h3 className='title text-center py-2 px-1'>{title}</h3>
        <p className='content text-start'>{content}</p>
        <PostAuthor userId={userId}/>
        <p className='text-end'><TimeAgo timestamp={date}/></p>
        <div className='d-flex justify-content-center align-items-center'>
          <ReactionButtons item={item}/>
        </div>
        <button className='border-0 bg-danger text-light fw-bold rounded-3 py-1 px-2' onClick={()=>navigate("/detail",{state:item})}> Details
        </button>
    </div>
  )
}

export default SinglePost