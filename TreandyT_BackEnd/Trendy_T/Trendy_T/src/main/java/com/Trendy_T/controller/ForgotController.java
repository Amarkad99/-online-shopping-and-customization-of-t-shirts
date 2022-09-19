package com.Trendy_T.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Trendy_T.Entity.User;
import com.Trendy_T.pojo.Massage;
import com.Trendy_T.pojo.UserInfo;
import com.Trendy_T.repositories.UserRepository;

@RestController
@RequestMapping("/forgot")
@CrossOrigin
public class ForgotController {
	
	@Autowired
	UserRepository urepo;
	@RequestMapping(method = RequestMethod.POST ,value = "/login2")
	public Massage login(@RequestBody UserInfo us)
	{
		System.out.println("Here We are");
		User a=(User)urepo.findByEmail(us.getEmail_id());
		System.out.println(a.getEmail());
		System.out.println(a.getSecurity_answer()+""+us.getSecurity_answer());
		
		if( a!=null && a.getSecurity_answer().equals(us.getSecurity_answer())){
		
			return new Massage ("OK"); 			
		}
		else
		return new Massage ("not ok");
	}

}
