
package com.Trendy_T.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.Address;
import com.Trendy_T.Entity.User;
import com.Trendy_T.pojo.UserInfo;
import com.Trendy_T.repositories.AddressRepository;
import com.Trendy_T.repositories.UserRepository;

@RestController
@RequestMapping("/user")
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
	public User addUser(@RequestBody UserInfo u)
	{
			Address add=new Address(u.getAddress_line(), u.getStreet(), u.getCity(), u.getPincode());
			adrrepo.save(add);	
			User us=new User( u.getFirst_name(), u.getLast_name(),u.getGender(), u.getEmail_id(),u.getMobile_number(),u.getSecurity_question(),u.getSecurity_answer(), u.getPassword());
			us.setAddress_id(add);
			urepo.save(us);
			return us;	
	}
	@RequestMapping(method = RequestMethod.PUT ,value = "/edit")
	public User editUser(@RequestBody UserInfo us)
	{
		
		User u=(User)urepo.findByEmail(us.getEmail_id());
		u.setFirst_name(us.getFirst_name());
		u.setLast_name(us.getLast_name());
		u.setGender(u.getGender());
		u.setMobile_number(us.getMobile_number());
		urepo.save(u);
		return u;
		
	}
		
}

