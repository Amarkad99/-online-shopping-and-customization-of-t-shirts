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
	private Orders order_id;
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="product_id")
	private Product product_id;
	private int product_quantity;
	
	
	public Orders getOrder_id() {
		return order_id;
	}
	public void setOrder_id(Orders order_id) {
		this.order_id = order_id;
	}
	public Product getProduct_id() {
		return product_id;
	}
	public void setProduct_id(Product product_id) {
		this.product_id = product_id;
	}
	public int getProduct_quantity() {
		return product_quantity;
	}
	public void setProduct_quantity(int product_quantity) {
		this.product_quantity = product_quantity;
	}
	public Order_Details(Orders order_id, Product product_id, int product_quantity) {
		super();
		this.order_id = order_id;
		this.product_id = product_id;
		this.product_quantity = product_quantity;
	}
	
	
	
}
