
package io.nology.wales.blogs.blogposts;

import jakarta.validation.constraints.NotBlank;

public class CreateBlogPostDTO {

	@NotBlank
	private String title;

	@NotBlank
	private String content;

	@NotBlank
	private String category;

	public String getTitle() {
		return title;
	}

//	public void setTitle(String title) {
//		this.title = title;
//	}

	public String getContent() {
		return content;
	}

//	public void setContent(String content) {
//		this.content = content;
//	}

	public String getCategory() {
		return category;
	}

	@Override
	public String toString() {
		return "CreateBlogPostDTO [title=" + title + ", content=" + content + ", category=" + category + "]";
	}

//	public void setCategory(String category) {
//		this.category = category;
//	}
}