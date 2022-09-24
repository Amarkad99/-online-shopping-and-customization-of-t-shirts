package com.Trendy_T.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.Order_Details;
import com.Trendy_T.Entity.Orders;
import com.Trendy_T.Entity.Product;
import com.Trendy_T.Entity.User;
import com.Trendy_T.pojo.Massage;
import com.Trendy_T.pojo.OrderDTO;
import com.Trendy_T.pojo.OrderInfo;
import com.Trendy_T.pojo.Place_order;
import com.Trendy_T.pojo.ProductInfo;
import com.Trendy_T.repositories.OrderRepository;
import com.Trendy_T.repositories.Order_DetailsRepositery;
//import com.Trendy_T.repositories.OrderdetailRepositery;
import com.Trendy_T.repositories.ProductRepository;
import com.Trendy_T.repositories.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/order")
@EntityScan("com.Trendy_T.Entity")
@EnableJdbcRepositories("com.Trendy_T.repositories")
public class OrderController {

	
	@Autowired
	UserRepository urepo;
	
	
	@Autowired
	OrderRepository orepo;
	
	@Autowired
	ProductRepository prepo;
	
	@Autowired
	Order_DetailsRepositery odrepo;
	
	@GetMapping("/orderdetails/{email}")
	public List <OrderInfo> orderdetails(@PathVariable String email)
	{
		
		List <OrderInfo> oinfo = new ArrayList<OrderInfo>();
		List<Order_Details> odd=odrepo.findAll();
		User u=urepo.findByEmail(email);
		System.out.println(u.getEmail());
	
	List<Orders> od=orepo.findAll();
	
	  for (Orders orders : od) {
		  OrderInfo oi = new OrderInfo();
		  if(orders.getUser_id().getUser_id()== u.getUser_id()) {
				oi.setStatus(orders.getStatus());
				oi.setOrderdate(orders.getOrder_date());
				oi.setTotal_price(orders.getTotal_price());
				oinfo.add(oi);
			}
		  for ( Order_Details oddd : odd) {
				 if(oddd.getOrder_id() == orders.getOrder_id()) {
					 Product p = prepo.findById(oddd.getProduct_id()).orElseThrow();
					 oi.setColor(p.getProducttype_id().getColor());
					 oi.setNeck_type(p.getProducttype_id().getNeck_type());
					 oi.setPrice(p.getPrice());
					 oi.setSize(p.getProducttype_id().getSize());
					 oi.setSleev(p.getProducttype_id().getSleeve());
					 oi.setProduct_quantity(oddd.getProduct_quantity());
					 oinfo.add(oi);
				 }
				
	  }
	}
		return oinfo;
}
	
	
	@PostMapping("/placeorder")	
	public Massage addUser(@RequestBody OrderDTO myData )
	{ 
		System.out.println("he bg");
//		User u=urepo.findByEmail(po.getEmail());
		Order_Details od=new Order_Details ();
//	       Orders o=new Orders(u,u.getAddress_id(),"order placed",po.getTotalprice(),new Date(),new Date());
//	       orepo.save(o);
//	       System.out.println(po.getOr());
	      
//	       for (ProductInfo productInfo : po) {
//			//od.setOrder_id(o);
//			od.setProduct_id(prepo.getReferenceById(productInfo.getProductid()));
//			od.setProduct_quantity(productInfo.getQuantity());
//			odrepo.save(od);
//		}   
			return null;
	}

	
	
}

