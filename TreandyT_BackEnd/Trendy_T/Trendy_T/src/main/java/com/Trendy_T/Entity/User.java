package com.Trendy_T.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="user_tbl")
public class User {
	
	@Id
	@GeneratedValue
	private int userid;
	
	private String first_name;
	private String last_name;
	private String gender;
	private String email;
	private long mobile_number;
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="address_id")
	private Address address_id;
	private String security_question;
	private String security_answer;
	private String password;
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@ManyToMany
private List<Review> review; 
	public int getUser_id() {
		return userid;
	}
	public void setUser_id(int user_id) {
		this.userid = userid;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail_id(String email_id) {
		this.email = email_id;
	}
	public long getMobile_number() {
		return mobile_number;
	}
	public void setMobile_number(long mobile_number) {
		this.mobile_number = mobile_number;
	}
	public Address getAddress_id() {
		return address_id;
	}
	public void setAddress_id(Address address_id) {
		this.address_id = address_id;
	}
	public String getSecurity_question() {
		return security_question;
	}
	public void setSecurity_question(String security_question) {
		this.security_question = security_question;
	}
	public String getSecurity_answer() {
		return security_answer;
	}
	public void setSecurity_answer(String security_answer) {
		this.security_answer = security_answer;
	}
	public User() {
		super();
	}
	public User(int user_id, String first_name, String last_name, String gender, String email_id, long mobile_number,
			Address address_id, String security_question, String security_answer,String password) {
		super();
		this.userid = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.gender = gender;
		this.email= email_id;
		this.mobile_number = mobile_number;
		this.address_id = address_id;
		this.security_question = security_question;
		this.security_answer = security_answer;
		this.password=password;
	}
	public User( String first_name, String last_name, String gender, String email_id, long mobile_number,
			String security_question, String security_answer,String password) {
		
		this.first_name = first_name;
		this.last_name = last_name;
		this.gender = gender;
		this.email = email_id;
		this.mobile_number = mobile_number;
		this.security_question = security_question;
		this.security_answer = security_answer;
		this.password=password;
	}
	
	
	
	
	

}
