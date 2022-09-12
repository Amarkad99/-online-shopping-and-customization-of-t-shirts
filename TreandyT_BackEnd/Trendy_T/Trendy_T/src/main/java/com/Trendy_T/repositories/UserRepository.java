package com.Trendy_T.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Trendy_T.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
