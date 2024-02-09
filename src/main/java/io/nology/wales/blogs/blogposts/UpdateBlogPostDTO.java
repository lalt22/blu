package io.nology.wales.blogs.blogposts;

import jakarta.validation.constraints.Pattern;

public class UpdateBlogPostDTO {

	@Pattern(regexp = "^(?=\\S).*$", message = "Title Cannot be empty")
	private String title;

	@Pattern(regexp = "^(?=\\S).*$", message = "Content Cannot be empty")
	private String content;

	@Pattern(regexp = "^(?=\\S).*$", message = "Category Cannot be empty")
	private String category;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}