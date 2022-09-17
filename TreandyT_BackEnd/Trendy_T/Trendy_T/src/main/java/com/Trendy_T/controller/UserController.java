
package com.Trendy_T.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.Address;
import com.Trendy_T.Entity.User;
import com.Trendy_T.pojo.Massage;
import com.Trendy_T.pojo.UserInfo;

import com.Trendy_T.repositories.AddressRepository;
import com.Trendy_T.repositories.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	
	@Autowired
	UserRepository urepo;
	
	@Autowired
	private AddressRepository adrrepo;
	@GetMapping("/findall")
	public List<User> users()
	{
		return urepo.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST ,value = "/register")	
	public Massage addUser(@RequestBody UserInfo u)
	{ 
		
		User a=(User)urepo.findByEmail(u.getEmail_id());

		if(a == null) 
		{
			Address add=new Address(u.getAddress_line(), u.getStreet(), u.getCity(), u.getPincode());
			adrrepo.save(add);	
			User us=new User( u.getFirst_name(), u.getLast_name(),u.getGender(), u.getEmail_id(),u.getMobile_number(),u.getSecurity_question(),u.getSecurity_answer(), u.getPassword());
			us.setAddress_id(add);
			urepo.save(us);
			return new Massage ("succsess");	
		}
		else
			return new Massage ("aldredy register");
			
	}
	
	
	@GetMapping("/profile/{Emailid}")
	public UserInfo addUser(@PathVariable String Emailid)
	{ 
	
		UserInfo us = new UserInfo();
		User a=(User)urepo.findByEmail(Emailid);
		Address add=a.getAddress_id();
		us.setFirst_name(a.getFirst_name());
		us.setLast_name(a.getLast_name());
		us.setMobile_number(a.getMobile_number());
		us.setGender(a.getGender());
		us.setCity(add.getCity());
		us.setPincode(add.getPincode());
		us.setStreet(add.getStreet());
		us.setAddress_line(add.getAddress_line());
		
		return us;			
	}
	
	@PutMapping("/edit")
	public UserInfo edituser( @RequestBody UserInfo up)
	{ 
	
		Address add=new Address();
		System.out.println(up.getEmail_id());
		UserInfo  us = new UserInfo ();
		User a=(User)urepo.findByEmail(up.getEmail_id());
		add=a.getAddress_id();
		add.setAddress_line(up.getAddress_line());
		add.setCity(up.getCity());
		add.setPincode(up.getPincode());
		add.setStreet(up.getStreet());
		adrrepo.save(add);	
		
		
		a.setFirst_name(up.getFirst_name());
		a.setLast_name(up.getLast_name());
		a.setGender(up.getGender());
		a.setMobile_number(up.getMobile_number());
		a.setAddress_id(add);
		urepo.save(a);
		
		us.setFirst_name(a.getFirst_name());
		us.setLast_name(a.getLast_name());
		us.setMobile_number(a.getMobile_number());
		us.setGender(a.getGender());
		us.setCity(add.getCity());
		us.setPincode(add.getPincode());
		us.setStreet(add.getStreet());
		us.setAddress_line(add.getAddress_line());
	
		
		return us;			
	}
	
	

}

