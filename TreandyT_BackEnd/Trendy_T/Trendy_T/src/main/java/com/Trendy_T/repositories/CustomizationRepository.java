package com.Trendy_T.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Trendy_T.Entity.Customization;


@Repository
public interface CustomizationRepository extends JpaRepository<Customization, Integer> {
	

	@Query("select c from Customization c where c.Customizationid=:Customizationid")
	Customization findByCustomizationid(int Customizationid);

	
}
