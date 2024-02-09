package io.nology.wales.blogs.config;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.nology.wales.blogs.blogposts.BlogPost;
import io.nology.wales.blogs.blogposts.CreateBlogPostDTO;
import io.nology.wales.blogs.blogposts.UpdateBlogPostDTO;

@Configuration
public class ModelMapperConfig {

	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		// rules for all strings
		mapper.typeMap(String.class, String.class).setConverter(new StringTrimConverter());
		// skip null completely
		mapper.getConfiguration().setSkipNullEnabled(true);

		// set up rules for particular fields on particular DTOS

		mapper.typeMap(CreateBlogPostDTO.class, BlogPost.class).addMappings(
				m -> m.using(new LowerCaseConverter()).map(CreateBlogPostDTO::getCategory, BlogPost::setCategory));

		mapper.typeMap(UpdateBlogPostDTO.class, BlogPost.class).addMappings(
				m -> m.using(new LowerCaseConverter()).map(UpdateBlogPostDTO::getCategory, BlogPost::setCategory));
		return mapper;
	}

	private class StringTrimConverter implements Converter<String, String> {

		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().trim();
		}
	}

	private class LowerCaseConverter implements Converter<String, String> {

		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().toLowerCase();
		}
	}
}