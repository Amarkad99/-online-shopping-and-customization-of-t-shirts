package com.Trendy_T.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.Trendy_T.Entity.Order_Details;


@Repository
public interface Order_DetailsRepositery  extends JpaRepository<Order_Details,Integer>{
////	@Query("select od from Order_Details  od where od.productid=:orderid")
//	List< Order_Details> findByOrderId(int orderid);

}
