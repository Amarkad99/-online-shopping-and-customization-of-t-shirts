package com.Trendy_T.pojo;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.Trendy_T.Entity.Address;

public class UserInfo {
	
	
	private String first_name;
	private String last_name;
	private String gender;
	private String email_id;
	private long mobile_number;
	private String security_question;
	private String security_answer;
	private String password;
	private String address_line;
	private String street;
	private String city;
	private String pincode;
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
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public long getMobile_number() {
		return mobile_number;
	}
	public void setMobile_number(long mobile_number) {
		this.mobile_number = mobile_number;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress_line() {
		return address_line;
	}
	public void setAddress_line(String address_line) {
		this.address_line = address_line;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public UserInfo() {
		super();
	}
	public UserInfo(String first_name, String last_name, String gender, String email_id, long mobile_number,
			String security_question, String security_answer, String password, String address_line, String street,
			String city, String pincode) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.gender = gender;
		this.email_id = email_id;
		this.mobile_number = mobile_number;
		this.security_question = security_question;
		this.security_answer = security_answer;
		this.password = password;
		this.address_line = address_line;
		this.street = street;
		this.city = city;
		this.pincode = pincode;
	}
	
	
	
	
}
