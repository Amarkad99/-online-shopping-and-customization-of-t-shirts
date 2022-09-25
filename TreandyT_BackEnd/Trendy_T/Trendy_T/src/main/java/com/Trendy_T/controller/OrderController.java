package com.Trendy_T.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.Order_Details;
import com.Trendy_T.Entity.Orders;
import com.Trendy_T.Entity.Product;
import com.Trendy_T.Entity.ProductImage;
import com.Trendy_T.Entity.ProductType;
import com.Trendy_T.Entity.User;
import com.Trendy_T.pojo.OrderContainer;
import com.Trendy_T.pojo.OrderInfo;
import com.Trendy_T.pojo.OrderProductQuantity;
import com.Trendy_T.pojo.ProductInfo;
import com.Trendy_T.repositories.OrderRepository;
import com.Trendy_T.repositories.Order_DetailsRepositery;
import com.Trendy_T.repositories.ProductImageRepository;
//import com.Trendy_T.repositories.OrderdetailRepositery;
import com.Trendy_T.repositories.ProductRepository;
import com.Trendy_T.repositories.ProductTypeRepository;
import com.Trendy_T.repositories.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/order")
public class OrderController {

	
	@Autowired
	UserRepository urepo;
	
	
	@Autowired
	OrderRepository orepo;
	
	@Autowired
	ProductRepository prepo;
	

	@Autowired
	ProductTypeRepository ptrepo;
	
	@Autowired
	ProductImageRepository pirepo;
	
	@Autowired
	Order_DetailsRepositery odrepo;
	
	/*@GetMapping("/orderdetails/{email}")
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
				 if(oddd.getOrder_id().getOrder_id() == orders.getOrder_id()) {
					 oi.setColor(oddd.getProduct_id().getProducttype_id().getColor());
					 System.out.println(oddd.getProduct_id().getProducttype_id().getColor());
					 oi.setNeck_type(oddd.getProduct_id().getProducttype_id().getNeck_type());
					 oi.setPrice(oddd.getProduct_id().getPrice());
					 oi.setSize(oddd.getProduct_id().getProducttype_id().getSize());
					 oi.setSleev(oddd.getProduct_id().getProducttype_id().getSleeve());
					 oi.setProduct_quantity(oddd.getProduct_quantity());
					 oi.setTotal_price(oddd.getOrder_id().getTotal_price());
					 oinfo.add(oi);
				 }
				
		  }
	}
		return oinfo;
	
	
	}*/
	@GetMapping("/getAllOrderDetails")
	public List <OrderContainer> getOrderDetails()
	{
		
		List<Orders> ordersList=orepo.findAll();
		List<OrderContainer> orderContainerList=new ArrayList<OrderContainer>();
		for(Orders order:ordersList)
		{
			if(!order.getStatus().equals("7"))
			{
				orderContainerList.add(new OrderContainer(order.getOrder_id(),order.getUser_id(),order.getShipping_address_id(),order.getStatus(),order.getTotal_price(),order.getOrder_date(),order.getOrder_status_changed_datetime()));
			}
		}
		return orderContainerList;
		
	}
	
	@GetMapping("/getAllOrderHistoryDetails")
	public List <OrderContainer> getOrderHistoryDetails()
	{
		
		List<Orders> ordersList=orepo.findAll();
		List<OrderContainer> orderContainerList=new ArrayList<OrderContainer>();
		for(Orders order:ordersList)
		{
			if(order.getStatus().equals("7"))
			{
				orderContainerList.add(new OrderContainer(order.getOrder_id(),order.getUser_id(),order.getShipping_address_id(),order.getStatus(),order.getTotal_price(),order.getOrder_date(),order.getOrder_status_changed_datetime()));
			}
		}
		return orderContainerList;
		
	}
	@GetMapping("/getAllProductOrderDetails/{orderid}")
	public List <ProductInfo> getProductOrderDetails(@PathVariable int orderid)
	{
		 List <Order_Details> listOrder_Detail=new ArrayList<Order_Details>();
		listOrder_Detail=odrepo.findByOrderid(orderid);
		List<ProductInfo> prodList=new ArrayList<ProductInfo>();
		listOrder_Detail.forEach(i->{
			Product p= prepo.findById(i.getProductid()).orElseThrow();
			ProductType pt=ptrepo.findById(p.getProducttype_id().getproducttype_id()).orElseThrow();
			ProductImage pi=pirepo.findById(p.getProductimage_id().getProductimage_id()).orElseThrow();
			
			
			ProductInfo produInfoItem=new ProductInfo();
			
			produInfoItem.setProductid(p.getProduct_id());
			produInfoItem.setPrice(p.getPrice());
			produInfoItem.setQuantity(i.getProduct_quantity());
			produInfoItem.setColor(pt.getColor());
			produInfoItem.setMaterial(pt.getMaterial());
			produInfoItem.setSleeve(pt.getSleeve());
			produInfoItem.setNeck_type(pt.getNeck_type());
			produInfoItem.setSize(pt.getSize());
			produInfoItem.setImage_front(pi.getImage_front());
			produInfoItem.setImage_back(pi.getImage_back());
			produInfoItem.setImage_left(pi.getImage_left());
			produInfoItem.setImage_right(pi.getImage_right());
			
			prodList.add(produInfoItem);
// @formatter:on
		});
		
		
		
		
		/*List <OrderProductQuantity> listOrderProductQuantity=new ArrayList<OrderProductQuantity>();
		for(Order_Details orderDetail:listOrder_Detail)
		{
		
		OrderProductQuantity orderProduct=new  OrderProductQuantity();
		orderProduct.setProductid(orderDetail.getProductid());
		orderProduct.setQuantity(orderDetail.getProduct_quantity());
		listOrderProductQuantity.add(orderProduct);
		}*/
		return prodList;
	}
}
