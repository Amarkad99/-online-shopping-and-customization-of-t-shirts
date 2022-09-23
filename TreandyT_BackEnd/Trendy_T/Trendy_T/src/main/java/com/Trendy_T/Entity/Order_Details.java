package com.Trendy_T.Entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="order_detail_tbl")
public class Order_Details implements Serializable {

	@Id
	@GeneratedValue
	private int orderdetailid;
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="orderid")
	private Orders orderid;
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="productid")
	private Product productid;
	private int product_quantity;
	
	public Orders getOrder_id() {
		return orderid;
	}
	public Order_Details() {
		super();
	}
	public void setOrder_id(Orders order_id) {
		this.orderid = order_id;
	}
	public Product getProduct_id() {
		return productid;
	}
	public void setProduct_id(Product product_id) {
		this.productid = product_id;
	}
	public int getProduct_quantity() {
		return product_quantity;
	}
	public void setProduct_quantity(int product_quantity) {
		this.product_quantity = product_quantity;
	}
	public Order_Details(Orders order_id, Product product_id, int product_quantity) {
		super();
		this.orderid = order_id;
		this.productid = product_id;
		this.product_quantity = product_quantity;
	}
	
	
	
}
