package com.Trendy_T.Entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="product_type_tbl")
public class ProductType implements Serializable{
	
	@Id
	@GeneratedValue
	private int producttype_id;
	private String color;
	private String material;
	private String sleeve;
	private String neck_type;
	private String size;
	
	public int getproducttype_id() {
		return producttype_id;
	}

	public void setproducttype_id(int producttype_id) {
		this.producttype_id = producttype_id;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	public String getSleeve() {
		return sleeve;
	}

	public void setSleeve(String sleeve) {
		this.sleeve = sleeve;
	}

	public String getNeck_type() {
		return neck_type;
	}

	public void setNeck_type(String neck_type) {
		this.neck_type = neck_type;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}
	
	public ProductType() {
		super();
	}

	public ProductType(int producttype_id, String color, String material, String sleeve, String neck_type,
			String size) {
		super();
		this.producttype_id = producttype_id;
		this.color = color;
		this.material = material;
		this.sleeve = sleeve;
		this.neck_type = neck_type;
		this.size = size;
	}
	public ProductType( String color, String material, String sleeve, String neck_type,
			String size) {
		super();
		this.color = color;
		this.material = material;
		this.sleeve = sleeve;
		this.neck_type = neck_type;
		this.size = size;
	}
	
	
	
	
}
