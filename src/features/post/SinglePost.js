import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

const SinglePost = ({item}) => {
    const {title,content,userId,date}=item;
    // console.log(userId);
  return (
    <div className='card '>
        <h3 className='title text-center py-2 px-1'>{title}</h3>
        <p className='content'>{content.slice(0,200)}</p>
        <p><PostAuthor userId={userId}/></p>
        <p><TimeAgo timestamp={date}/></p>
        {/* <p><ReactionButtons item={item}/></p> */}
    </div>
  )
}

export default SinglePost