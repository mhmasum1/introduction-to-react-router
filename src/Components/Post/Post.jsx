import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({ post }) => {
    const { title, id, body } = post;
    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <p>ID :{id}</p>
            <p >Title   :{title} </p>
            <small>Body :{body}</small> <br />
            <Link to={`/post/${id}`}>Post Details</Link> <br />
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetails}>Click me show Details</button>

        </div>
    );
};

export default Post;   