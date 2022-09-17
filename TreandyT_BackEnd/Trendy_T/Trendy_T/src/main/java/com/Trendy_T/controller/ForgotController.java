
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
	public Massage security(@RequestBody UserInfo us)
	{
		System.out.println("Here We are");
		User a=(User)urepo.findByEmail(us.getEmail_id());
		if( a!=null && a.getSecurity_answer().equals(us.getSecurity_answer()) && a.getSecurity_question().equals(us.getSecurity_question()) ){
             System.out.println("ok");
			return new Massage ("OK"); 			
		}
		else
			return new Massage ("not ok");
	}




	@RequestMapping(method = RequestMethod.PUT ,value = "/edit1")
	public User editPass(@RequestBody User us)
	{
		System.out.println(us.getPassword()+" "+us.getEmail());
		User u=(User)urepo.findByEmail(us.getEmail());
		u.setPassword(us.getPassword());
		System.out.println(u.getPassword());
		urepo.save(u);
		return u;

	}

}


