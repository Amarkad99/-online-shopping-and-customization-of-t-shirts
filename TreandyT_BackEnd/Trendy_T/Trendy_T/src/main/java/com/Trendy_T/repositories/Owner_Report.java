package com.Trendy_T.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Trendy_T.Entity.Orders;

@Repository
public interface Owner_Report extends JpaRepository<Orders,Integer> {

}
