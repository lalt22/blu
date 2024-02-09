import { useEffect, useState, useContext } from "react";
import PageCard from "../../components/PageCards/PageCard";
import "./HomePage.scss"
import { getAllBlogPosts, getTodaysPosts } from "../../../services/blog-post-services";
import PostCard from "../../components/PostCard/PostCard";
import { RefreshContext } from "../../context/RefreshContext";

const Homepage = () => {
    const [todaysPosts, setTodaysPosts] = useState(null);
    const {refresh} = useContext(RefreshContext)
    useEffect(() => {
        getTodaysPosts().then((data) => setTodaysPosts(data))
    }, [refresh])


    return (
        <div className="page-wrapper">
            <img src="https://t3.ftcdn.net/jpg/02/99/21/78/360_F_299217809_TnjZoIPJbHvWTqLBjDQYIJ8NfV3CKsjd.jpg" />
            <div className="links">
                <PageCard pagename={"View..."} pageDetails={"See all posts"} pageRoute={"/see-posts"} />
                <PageCard pagename={"Create..."} pageDetails={"Make a new post"} pageRoute={"/make-post"} />
            </div>
            {todaysPosts &&
                <div className="selected-posts-section">
                    <h1>Today's Posts</h1>
                    <div className="selected-posts">
                        {todaysPosts.map((post) => {
                            return (
                                <PostCard post={post} key={post.id}/>
                            )
                        })}
                    </div>
                </div>
}
        </div>
        
    )
}

export default Homepage