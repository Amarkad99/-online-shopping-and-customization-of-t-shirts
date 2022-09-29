package com.Trendy_T.Entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="product_image_tbl")

public class ProductImage implements Serializable {
	@Id
	@GeneratedValue
	private int productimage_id;
	@Lob
	private String image_front;
	@Lob
	private String image_back;
	@Lob
	private String image_left;
	@Lob
	private String image_right;
	
	
	public int getProductimage_id() {
		return productimage_id;
	}
	public void setProductimage_id(int productimage_id) {
		this.productimage_id = productimage_id;
	}
	public ProductImage() {
		super();
	}
	public String getImage_front() {
		return image_front;
	}
	public void setImage_front(String image_front) {
		this.image_front = image_front;
	}
	public String getImage_back() {
		return image_back;
	}
	public void setImage_back(String image_back) {
		this.image_back = image_back;
	}
	public String getImage_left() {
		return image_left;
	}
	public void setImage_left(String image_left) {
		this.image_left = image_left;
	}
	public String getImage_right() {
		return image_right;
	}
	public void setImage_right(String image_right) {
		this.image_right = image_right;
	}
	public ProductImage(String image_front, String image_back, String image_left, String image_right) {
		super();
		this.image_front = image_front;
		this.image_back = image_back;
		this.image_left = image_left;
		this.image_right = image_right;
	}
	public ProductImage(int productimage_id, String image_front, String image_back, String image_left,
			String image_right) {
		super();
		this.productimage_id = productimage_id;
		this.image_front = image_front;
		this.image_back = image_back;
		this.image_left = image_left;
		this.image_right = image_right;
	}
	
}

