package com.Trendy_T.repositories;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Trendy_T.Entity.Orders;
import com.Trendy_T.Entity.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	
	
}
