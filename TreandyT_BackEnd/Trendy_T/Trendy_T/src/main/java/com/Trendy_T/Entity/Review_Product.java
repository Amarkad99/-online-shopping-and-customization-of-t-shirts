package com.Trendy_T.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="review_product_tbl")
public class Review_Product {

	@Id
	@GeneratedValue
	private int review_product_id;
	
	@ManyToMany(mappedBy="review",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private List<Product> product_id;
	
	public Review_Product() {
		super();
	}
	public int getReview_product_id() {
		return review_product_id;
	}
	public void setReview_product_id(int review_product_id) {
		this.review_product_id = review_product_id;
	}
	
	
	public Review_Product(int review_product_id, List<User> user_id, List<Product> product_id) {
		super();
		this.review_product_id = review_product_id;
		
		
	}
	
	
}
