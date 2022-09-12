import {useDispatch} from "react-redux";
import { addReaction } from "./postSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
}

const ReactionButtons = ({ item }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji)?.map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton border-0 bg-transparent mx-3 my-2"
                onClick={() =>
                    dispatch(addReaction({ postId: item.id, reaction: name }))
                }
            >
                {emoji} {item.reactions[name]}
            </button>
        )
    })
// console.log(reactionButtons);

    return <div>{reactionButtons}</div>
}
export default ReactionButtons