package io.nology.wales.blogs.blogposts;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
	public List<BlogPost> findByCreatedAt(Date created_at);
	
}