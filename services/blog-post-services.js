export const getAllBlogPosts = async () => {
    const response = await fetch('http://localhost:8090/posts');
    if (!response.ok) {
      throw new Error('Failed to get posts');
    }
    const data = await response.json();
    return data;
}
;

export const getPostById = async (id) => {
    const response = await fetch(`http://localhost:8090/posts/${id}`);
    if (!response.ok) {
        throw new Error("Failed to get post");
    }
    const data = await response.json();
    return data;
}

export const makeBlogPost = async (data) => {
    console.log("Sending post with " + data);
    const response = await fetch("http://localhost:8090/posts", {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            title : data.title,
            content : data.content,
            category: data.category
        })
    })
    if (!response.ok) {
        throw new Error("Failed to get post");
    }
}

export const updatePostById = async (id, data) => {
    const response = await fetch(`http://localhost:8090/posts/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            title : data.title,
            content : data.content,
        })
    })
    if (!response.ok) {
        throw new Error("Failed to update post");
    }
}

export const deletePostById = async (id) => {
    const response = await fetch(`http://localhost:8090/posts/${id}`, {
        method: "DELETE"
    })
    if (!response.ok) {
        throw new Error("Failed to update post");
    }
}

export const getTodaysPosts = async () => {
    const allPosts = await getAllBlogPosts();
    console.log(allPosts);
    var todayDate = new Date().toISOString().slice(0, 10);
    const todaysPosts = allPosts.filter((post) => {return post.createdAt.includes(todayDate)})
    console.log(todaysPosts);
    return todaysPosts;
}