
package io.nology.wales.blogs.blogposts;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class BlogPostService {

	@Autowired
	private BlogPostRepository repo;

	@Autowired
	private ModelMapper mapper;

	public BlogPost createPost(CreateBlogPostDTO data) {
//		BlogPost newPost = new BlogPost();

//		newPost.setCategory(data.getCategory().trim().toLowerCase());
//		newPost.setTitle(data.getTitle().trim());
//		newPost.setContent(data.getContent().trim());
//		newPost.setCreatedAt(new Date());
		BlogPost newPost = mapper.map(data, BlogPost.class);
		newPost.setCreatedAt(new Date());
		return this.repo.save(newPost);

	}

	public List<BlogPost> getAll() {
		return this.repo.findAll();

	}

	public Optional<BlogPost> findById(Long id) {
		return this.repo.findById(id);

	}
	
	public List<BlogPost> findByCreatedAt(Date date) {
		return this.repo.findByCreatedAt(date);
	}

	public Optional<BlogPost> updateById(@Valid UpdateBlogPostDTO data, Long id) {
		Optional<BlogPost> maybePost = this.findById(id);
		if (maybePost.isEmpty()) {
			return maybePost;
		}
		BlogPost foundPost = maybePost.get();
//		if (data.getTitle() != null) {
//			foundPost.setTitle(data.getTitle().trim());
//		}
//
//		if (data.getCategory() != null) {
//			foundPost.setCategory(data.getCategory().trim().toLowerCase());
//		}
//		if (data.getContent() != null) {
//			foundPost.setContent(data.getContent().trim());
//		}
		mapper.map(data, foundPost);
		BlogPost updated = this.repo.save(foundPost);
		return Optional.of(updated);
	}

	public boolean deletePostById(Long id) {
		Optional<BlogPost> maybePost = this.repo.findById(id);
		if (maybePost.isEmpty()) {
			return false;
		}
		this.repo.delete(maybePost.get());
		return true;
	}

}