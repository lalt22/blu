import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { RefreshContext } from "../../context/RefreshContext";
import { deletePostById, getPostById, updatePostById } from "../../../services/blog-post-services";
import { useForm } from "react-hook-form";
import styles from "./ContentPage.module.scss";


const ContentPage = () => {
    const pathVar = useParams();
    const id = pathVar.id;

    const [post, setPost] = useState(null);
    const {refresh, setRefresh} = useContext(RefreshContext);
    const [editing, setEditing] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();

    useEffect(() => {
        getPostById(id).then((data) => setPost(data))
        setSubmitted(false);
    }, [refresh])

    const handleClick = () => {
        setEditing(true);
        setRefresh(refresh+1);
    }


    const onSubmit = (data) => {
        updatePostById(id, data).then(() => setEditing(false)).then(setSubmitted(true)).then(setRefresh(refresh+1))
    }

    return (
        <div className={styles.content_wrapper}>
            {post &&
                <div className={styles.details}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <button onClick={handleClick}>Edit Content</button>

                    {editing &&
                    <div className={styles.form_wrapper}>  
                        {!submitted &&
                            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                                <input placeholder="Enter Title"{...register("title")}></input> 
                                <textarea rows="30" placeholder="Post Content" {...register("content")}></textarea> 
                                <input className={styles.submit} type="submit"/>
                            </form>
                        }
                        {submitted && 
                            <h1>Edit Made!</h1>
                        }
                    </div>
                    }
                </div> 
            }
        </div>
    )
}

export default ContentPage;