package com.Trendy_T.Entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="order_detail_tbl")
public class Order_Details implements Serializable {
	
	@Id
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="order_id")
	private Orders orderid;
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="product_id")
	private Product productid;
	private int product_quantity;
	
	
	public Orders getOrder_id() {
		return orderid;
	}
	public void setOrder_id(Orders orderid) {
		this.orderid = orderid;
	}
	public Product getProduct_id() {
		return productid;
	}
	public void setProduct_id(Product productid) {
		this.productid = productid;
	}
	public int getProduct_quantity() {
		return product_quantity;
	}
	public void setProduct_quantity(int product_quantity) {
		this.product_quantity = product_quantity;
	}
	public Order_Details(Orders orderid, Product productid, int product_quantity) {
		super();
		this.orderid = orderid;
		this.productid = productid;
		this.product_quantity = product_quantity;
	}
	
	
	
}
