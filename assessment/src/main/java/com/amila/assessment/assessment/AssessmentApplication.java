package com.amila.assessment.assessment;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@EnableJpaAuditing
public class AssessmentApplication {
	final static Log logger = LogFactory.getLog(AssessmentApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(AssessmentApplication.class, args);
			logger.debug("application start !");
	}
	
//	@Bean
//	   public WebMvcConfigurer corsConfigurer() {
//	      return new WebMvcConfigurerAdapter() {
//	         @Override
//	         public void addCorsMappings(CorsRegistry registry) {

//	         }
//	      };
//	   }
}
