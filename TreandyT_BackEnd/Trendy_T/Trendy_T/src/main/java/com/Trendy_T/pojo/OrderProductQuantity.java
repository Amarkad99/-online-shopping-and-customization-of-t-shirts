package com.Trendy_T.pojo;

import com.Trendy_T.Entity.Product;

public class OrderProductQuantity {

	private int productid;
	private int quantity;
	public int getProductid() {
		return productid;
	}
	public void setProductid(int i) {
		this.productid = i;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public OrderProductQuantity() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderProductQuantity(int productid, int quantity) {
		super();
		this.productid = productid;
		this.quantity = quantity;
	}
	
}