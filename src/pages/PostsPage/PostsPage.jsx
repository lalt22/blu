import { useContext, useEffect, useState } from "react";
import { RefreshContext } from "../../context/RefreshContext";
import { deletePostById, getAllBlogPosts } from "../../../services/blog-post-services";
import styles from "./PostsPage.module.scss";
import { Link } from "react-router-dom";
import { PostCard } from "../../components/PostCard/PostCard";

const PostsPage = () => {
    const [allPosts, setAllPosts] = useState([]);
    const {refresh, setRefresh} = useContext(RefreshContext)

    useEffect(() => {
        getAllBlogPosts().then((data) => setAllPosts(data))
    }, [refresh])

    return (
        <div className={styles.posts_wrapper}>
            {allPosts &&
                allPosts.sort((post1, post2) => post2.id - post1.id).map((post) => {
                    return (
                        <PostCard post={post} key={post.id}/>
                    )
                })
            }
        </div>
    )   
}

export default PostsPage;