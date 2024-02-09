
package io.nology.wales.blogs.blogposts;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.nology.wales.blogs.exceptions.NotFoundException;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/posts")
public class BlogPostController {

	@Autowired
	private BlogPostService blogPostService;

	@PostMapping
	public ResponseEntity<BlogPost> createPost(@Valid @RequestBody CreateBlogPostDTO data) {
		BlogPost createdPost = this.blogPostService.createPost(data);
		return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
	}

	@GetMapping
	public ResponseEntity<List<BlogPost>> getAllPosts() {
		List<BlogPost> allPosts = this.blogPostService.getAll();
		return new ResponseEntity<>(allPosts, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<BlogPost> getPostById(@PathVariable Long id) throws NotFoundException {
		Optional<BlogPost> maybePost = this.blogPostService.findById(id);
		BlogPost foundPost = maybePost.orElseThrow(() -> new NotFoundException(BlogPost.class, id));
		return new ResponseEntity<>(foundPost, HttpStatus.OK);
	}
//	
//	@GetMapping("/{date}")
//	public ResponseEntity<BlogPost> getPostsFromDate(@RequestParam(value="name") String date) throws ParseException {
//		SimpleDateFormat formatter = new SimpleDateFormat("dd-mm-yyyy");
//		Date dateToCheck = formatter.parse(date);
//		List<BlogPost> posts = this.blogPostService.findByCreatedAt(dateToCheck);
//		return new ResponseEntity<>(posts, HttpStatus.OK);
//	}

	@PatchMapping("/{id}")
	public ResponseEntity<BlogPost> updatePostById(@Valid @RequestBody UpdateBlogPostDTO data, @PathVariable Long id)
			throws NotFoundException {
		Optional<BlogPost> maybeUpdatedPost = this.blogPostService.updateById(data, id);
		BlogPost updatedPost = maybeUpdatedPost.orElseThrow(() -> new NotFoundException(BlogPost.class, id));
		return new ResponseEntity<>(updatedPost, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<BlogPost> deletePostById(@PathVariable Long id) throws NotFoundException {
		boolean deleted = this.blogPostService.deletePostById(id);
		if (!deleted) {
			throw new NotFoundException(BlogPost.class, id);
		}
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}

}