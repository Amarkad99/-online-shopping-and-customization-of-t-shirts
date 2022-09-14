package com.Trendy_T.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Trendy_T.Entity.Product;
import com.Trendy_T.Entity.ProductImage;
@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, Integer>{

}
