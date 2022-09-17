
package com.Trendy_T.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="shipping_address_tbl")
public class Address {
	@Id
	@GeneratedValue
	private int address_id;
	private String address_line;
	private String street;
	private String city;
	private String pincode;
	
	public int getAddress_id() {
		return address_id;
	}
	public void setAddress_id(int address_id) {
		this.address_id = address_id;
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
	public Address() {
		super();
	}
	public Address(int address_id, String address_line, String street, String city, String pincode) {
		super();
		this.address_id = address_id;
		this.address_line = address_line;
		this.street = street;
		this.city = city;
		this.pincode = pincode;
	}

	public Address(String address_line, String street, String city, String pincode) {
		super();
		this.address_line = address_line;
		this.street = street;
		this.city = city;
		this.pincode = pincode;
	}
	
	
	
	


}
