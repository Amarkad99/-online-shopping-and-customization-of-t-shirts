package com.Trendy_T.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="product_tbl")
public class Product {
	@Id
	@GeneratedValue
	private int product_id;
	private double price;
	private int quantity;
	private int iscustomizable;
	
	@ManyToMany
	private List<Review> review; 
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getIscustomizable() {
		return iscustomizable;
	}
	public void setIscustomizable(int iscustomizable) {
		this.iscustomizable = iscustomizable;
	}
	
	public Product() {
		super();
	}
	public Product(int product_id, double price, int quantity, int iscustomizable) {
		super();
		this.product_id = product_id;
		this.price = price;
		this.quantity = quantity;
		this.iscustomizable = iscustomizable;
	}
	
	

}
