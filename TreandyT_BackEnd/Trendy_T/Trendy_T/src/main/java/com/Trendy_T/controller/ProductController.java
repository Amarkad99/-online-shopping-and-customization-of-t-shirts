package com.Trendy_T.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.Address;
import com.Trendy_T.Entity.Product;
import com.Trendy_T.Entity.ProductImage;
import com.Trendy_T.Entity.ProductType;
import com.Trendy_T.Entity.User;
import com.Trendy_T.pojo.ProductInfo;
import com.Trendy_T.pojo.UserInfo;
import com.Trendy_T.repositories.ProductImageRepository;
import com.Trendy_T.repositories.ProductRepository;
import com.Trendy_T.repositories.ProductTypeRepository;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
	
	@Autowired
	ProductRepository prepo;
	@Autowired
	ProductTypeRepository ptrepo;
	
	@Autowired
	ProductImageRepository pirepo;
	@RequestMapping(method = RequestMethod.POST ,value = "/insert")	
	public String addProduct(@RequestBody ProductInfo p)
	{

			Product pr=new Product( p.getProductid(),p.getPrice(),p.getQuantity(),p.getIscustomizable());
	
			prepo.save(pr);
			
			ProductType pt=new ProductType(p.getColor(),p.getMaterial(),p.getSleeve(),p.getNeck_type(),p.getSize());
			
			ptrepo.save(pt);
			
			ProductImage pi=new ProductImage(p.getImage_front(),p.getImage_back(),p.getImage_left(),p.getImage_right());
			pirepo.save(pi);
			
			return "ok";	
			
	}
	
	

}
