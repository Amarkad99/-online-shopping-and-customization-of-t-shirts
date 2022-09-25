package com.Trendy_T.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.Customization;
import com.Trendy_T.Entity.Order_Details;
import com.Trendy_T.Entity.Orders;
import com.Trendy_T.Entity.Product;
import com.Trendy_T.Entity.User;
import com.Trendy_T.pojo.CustomizeInfo;
import com.Trendy_T.repositories.CustomizationRepository;
import com.Trendy_T.repositories.OrderRepository;
import com.Trendy_T.repositories.UserRepository;


@CrossOrigin
@RestController
@RequestMapping("/customization")
public class CustomizationController {
	
	@Autowired
	CustomizationRepository crepo;
	
	@Autowired
	OrderRepository orepo;
	
	@Autowired
	UserRepository urepo;
	
	
	@RequestMapping(method = RequestMethod.POST ,value = "/insert")	
	public Customization addUser(@RequestBody CustomizeInfo u)
	{ 
		Product p= new Product();
		p.setIscustomizable(1);
		
		User ur=urepo.findByEmail(u.getEmail());
		Orders o=new Orders(ur,ur.getAddress_id(),"order placed",500,new Date(),new Date());
		orepo.save(o);
		Customization add = new Customization( u.getFront_image_to_insert(), u.getFront_upper_text(), u.getFront_lower_text(), u.getText_size(), u.getT_shirt_color(), u.getText_color());
		crepo.save(add);
		Order_Details od=new Order_Details();
		od.setOrder_id(o.getOrder_id());
		od.setProduct_id(p.getProduct_id());
		od.setProduct_quantity(1);
		
		return add;
	}
	
	@GetMapping("/getCusomizedDetail/{productid}")
	public Customization getCustomization(@PathVariable int productid)
	{
		Customization c=new Customization();
		c=crepo.findById(1).orElseThrow();
		return c;
		
	}
	

}
