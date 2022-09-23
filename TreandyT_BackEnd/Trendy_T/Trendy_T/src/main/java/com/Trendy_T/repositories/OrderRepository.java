package com.Trendy_T.repositories;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Trendy_T.Entity.Orders;
import com.Trendy_T.Entity.User;


@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {
	
	@Query("select o from Orders o where o.userid=:user_id")
	public Orders findByUserid(int user_id);
}
