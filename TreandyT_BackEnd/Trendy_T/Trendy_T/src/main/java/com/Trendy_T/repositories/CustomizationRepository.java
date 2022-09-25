package com.Trendy_T.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Trendy_T.Entity.Customization;
import com.Trendy_T.Entity.Order_Details;


@Repository
public interface CustomizationRepository extends JpaRepository<Customization, Integer> {
	
	
	// Customization findByProduct_id(int productd);
}
