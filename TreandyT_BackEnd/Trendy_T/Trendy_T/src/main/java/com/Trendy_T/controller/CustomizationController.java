package com.Trendy_T.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.Customization;
import com.Trendy_T.pojo.CustomizeInfo;
import com.Trendy_T.pojo.Massage;
import com.Trendy_T.repositories.CustomizationRepository;


@CrossOrigin(origins="http://localhost/8080")
@RestController
@RequestMapping("/customization")
public class CustomizationController {
	
	@Autowired
	CustomizationRepository crepo;
	
	
	
	@RequestMapping(method = RequestMethod.POST ,value = "/insert")	
	public Massage addUser(@RequestBody Customization  u)
	{ 
		Customization add = new Customization( u.getFront_image_to_insert(), u.getFront_upper_text(), u.getFront_lower_text(), u.getText_size(), u.getT_shirt_color(), u.getText_color());
		if(add != null)
		{
		crepo.save(add);
		
		return new Massage ("succsess");
		}
		else
		{
			return new Massage ("Data Not Available");
		}
	}
	

	@GetMapping("/details/{Customization_id}")
	public CustomizeInfo orderdetails(@PathVariable int Customization_id)
	{
		CustomizeInfo cinfo = new CustomizeInfo();
		
		Customization c = (Customization) crepo.findByCustomizationid(Customization_id);
		
		cinfo.setFront_image_to_insert(c.getFront_image_to_insert());
		cinfo.setFront_lower_text(c.getFront_lower_text());
		cinfo.setFront_upper_text(c.getFront_upper_text());
		cinfo.setT_shirt_color(c.getT_shirt_color());
		cinfo.setText_color(c.getText_color());
		cinfo.setText_size(c.getText_size());
		
		return cinfo;	
	}
}
