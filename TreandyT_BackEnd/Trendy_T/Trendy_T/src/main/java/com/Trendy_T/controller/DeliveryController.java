package com.Trendy_T.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.Order_Details;
import com.Trendy_T.Entity.Orders;
import com.Trendy_T.Entity.User;
import com.Trendy_T.pojo.Delivery_Details;
import com.Trendy_T.pojo.UserInfo;
import com.Trendy_T.repositories.AddressRepository;
import com.Trendy_T.repositories.DeliveryRepository;
import com.Trendy_T.repositories.UserRepository;

@RestController
@RequestMapping("/Delivery")
@CrossOrigin
@EnableJdbcRepositories("com.Trendy_T.repositories")
public class DeliveryController {
	

	@Autowired
	private DeliveryRepository drepo;
	@GetMapping("/findall")
	public List <Delivery_Details> getDetails() {
		List <Delivery_Details> list=new ArrayList<Delivery_Details>(); 
		Delivery_Details li=new Delivery_Details();
		List<Orders> dl=drepo.findAll();
		
		for (Orders orders : dl) {
			
			li.setFirst_name(orders.getUser_id().getFirst_name());
			li.setLast_name(orders.getUser_id().getLast_name());
			li.setMobile_number(orders.getUser_id().getMobile_number());
			li.setOrder_id(orders.getOrder_id());
			li.setAddress_line(orders.getShipping_address_id().getAddress_line());
			li.setCity(orders.getShipping_address_id().getCity());
			li.setPincode(orders.getShipping_address_id().getPincode());
			li.setStreet(orders.getShipping_address_id().getStreet());
			list.add(li);	
		}
		return list;
		
	}
	
	@GetMapping("/delivery")
	public List <Delivery_Details> getDeliverydetails() {
		List <Delivery_Details> list=new ArrayList<Delivery_Details>(); 
		Delivery_Details li=new Delivery_Details();
		List<Orders> dl=drepo.findByOrderdate(new Date());
		
		for (Orders orders : dl) {
			li.setFirst_name(orders.getUser_id().getFirst_name());
			li.setLast_name(orders.getUser_id().getLast_name());
			li.setMobile_number(orders.getUser_id().getMobile_number());
			li.setOrder_id(orders.getOrder_id());
			li.setAddress_line(orders.getShipping_address_id().getAddress_line());
			li.setCity(orders.getShipping_address_id().getCity());
			li.setPincode(orders.getShipping_address_id().getPincode());
			li.setStreet(orders.getShipping_address_id().getStreet());
			list.add(li);	
		}
		return list;
		
	}
	
	//not ok
	@PutMapping("/changesatus")
	public void changestatus(Delivery_Details Dl) {
		
		Delivery_Details li=new Delivery_Details();
		Optional<Orders> dl=drepo.findById(Dl.getOrder_id());
		
		
	}
}


