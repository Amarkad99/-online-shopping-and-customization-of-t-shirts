package com.Trendy_T;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan({"com.Trendy_T.repositories"})
public class TrendyTApplication {

	public static void main(String[] args) {
		SpringApplication.run(TrendyTApplication.class, args);
	}

}
