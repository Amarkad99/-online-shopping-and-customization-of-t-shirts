package com.Trendy_T.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Trendy_T.Entity.Address;
@Repository
public interface AddressRepository extends JpaRepository<Address,Integer>{

}
