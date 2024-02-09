import { useForm } from "react-hook-form";
import { makeBlogPost } from "../../../services/blog-post-services";
import { useContext, useState } from "react";
import styles from "./CreatePage.module.scss";
import { RefreshContext } from "../../context/RefreshContext";

const CreatePage = () => {
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm();
    const {refresh, setRefresh} = useContext(RefreshContext);
    const onSubmit = (data) => {
        makeBlogPost(data).then(() => setSubmitted(true))
    }
    return (
        <div className={styles.form_wrapper}>  
        {!submitted &&
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter Title"{...register("title")}></input> 
                <textarea  rows="30"placeholder="Post Content" {...register("content")}></textarea> 
                <input type="text" placeholder="Post Category" {...register("category")}></input> 
                <input type="submit"/>
            </form>
        }
        {submitted && 
            <h1>Post Made!</h1>
        }
        </div>
    )
        
        
}

export default CreatePage;