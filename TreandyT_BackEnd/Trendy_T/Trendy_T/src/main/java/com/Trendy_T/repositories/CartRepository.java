package com.Trendy_T.repositories;

import java.util.Optional;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import com.Trendy_T.Entity.Product;

public interface CartRepository extends JpaRepository<Product, Integer> {
	


}
