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
	private byte[] image_front;
	@Lob
	private byte[] image_back;
	@Lob
	private byte[] image_left;
	@Lob
	private byte[] image_right;
	public int getProduct_id() {
		return productimage_id;
	}
	public void setProduct_id(int product_id) {
		this.productimage_id = product_id;
	}
	public byte[] getImage_front() {
		return image_front;
	}
	public void setImage_front(byte[] image_front) {
		this.image_front = image_front;
	}
	public byte[] getImage_back() {
		return image_back;
	}
	public void setImage_back(byte[] image_back) {
		this.image_back = image_back;
	}
	public byte[] getImage_left() {
		return image_left;
	}
	public void setImage_left(byte[] image_left) {
		this.image_left = image_left;
	}
	public byte[] getImage_right() {
		return image_right;
	}
	public void setImage_right(byte[] image_right) {
		this.image_right = image_right;
	}
	public ProductImage() {
		super();
	}
	public ProductImage(int product_id, byte[] image_front, byte[] image_back, byte[] image_left,
			byte[] image_right) {
		super();
		this.productimage_id = product_id;
		this.image_front = image_front;
		this.image_back = image_back;
		this.image_left = image_left;
		this.image_right = image_right;
	}
	public ProductImage( byte[] image_front, byte[] image_back, byte[] image_left,
			byte[] image_right) {
		super();
		
		this.image_front = image_front;
		this.image_back = image_back;
		this.image_left = image_left;
		this.image_right = image_right;
	}
	
	

}

