package com.Trendy_T.repositories;



import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Trendy_T.Entity.Order_Details;
import com.Trendy_T.Entity.Orders;
import com.Trendy_T.Entity.User;



@Repository
public interface DeliveryRepository extends JpaRepository<Orders,Integer>{
  
	@Query("from Orders o where o.orderdate=:orderdate")
	List<Orders> findByOrderdate(@Param("orderdate") LocalDate date);

	

}
