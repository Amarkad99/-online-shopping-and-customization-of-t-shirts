package com.Trendy_T.pojo;

import java.util.List;

import com.Trendy_T.Entity.Product;

public class Place_order {
	
	Product[] pr;
	private String email;
	private double totalprice;
	public Place_order(Product[] or, String email, double totalprice) {
		super();
		this.pr = or;
		this.email = email;
		this.totalprice = totalprice;
	}
	public Product[] getOr() {
		return pr;
	}
	public void setOr(Product[] or) {
		this.pr = or;
	}
	
	public Place_order() {
		super();
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(double totalprice) {
		this.totalprice = totalprice;
	}

}
