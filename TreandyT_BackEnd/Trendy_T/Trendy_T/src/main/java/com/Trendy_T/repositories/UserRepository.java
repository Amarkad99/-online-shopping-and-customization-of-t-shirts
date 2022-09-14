package com.Trendy_T.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import com.Trendy_T.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	@Query("select u from User u where u.email=:email_id")
	 User findByEmail(String email_id);
	

}
