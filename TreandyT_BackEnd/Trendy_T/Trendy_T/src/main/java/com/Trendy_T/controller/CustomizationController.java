package com.Trendy_T.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.Customization;
import com.Trendy_T.pojo.CustomizeInfo;
import com.Trendy_T.repositories.CustomizationRepository;


@CrossOrigin(origins="http://localhost/8080")
@RestController
@RequestMapping("/customization")
public class CustomizationController {
	
	@Autowired
	CustomizationRepository crepo;
	
	
	
	@RequestMapping(method = RequestMethod.POST ,value = "/insert")	
	public Customization addUser(@RequestBody Customization  u)
	{ 
		Customization add = new Customization( u.getFront_image_to_insert(), u.getFront_upper_text(), u.getFront_lower_text(), u.getText_size(), u.getT_shirt_color(), u.getText_color());
		
		crepo.save(add);
		
		return add;
	}
	

}
