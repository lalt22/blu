import { Link } from "react-router-dom";
import styles from "./PostCard.module.scss";
import DayJS from 'react-dayjs';
import { deletePostById } from "../../../services/blog-post-services";
import { useContext } from "react";
import { RefreshContext } from "../../context/RefreshContext";

export const PostCard = ({post}) => {
    const {refresh, setRefresh} = useContext(RefreshContext);
    const handleClick = (id) => {
        deletePostById(id).then(() => setRefresh(refresh + 1));
    }
    const category = post.category.toLowerCase();
    return (
        <div className={[styles.post, styles[category]].join(" ")}>
            <h2>{post.title}</h2>
            <DayJS date={post.date} format="D-M-YYYY hh:mm"></DayJS>
            <Link to={`/posts/${post.id}`}>See More</Link>
            <button onClick={() => handleClick(post.id)}>Delete</button>
        </div>
    )
}

export default PostCard;