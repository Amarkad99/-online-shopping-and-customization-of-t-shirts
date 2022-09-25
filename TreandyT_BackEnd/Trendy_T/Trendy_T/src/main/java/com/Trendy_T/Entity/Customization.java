
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
@Table(name="customization_tbl")
public class Customization implements Serializable{
	@Id
	@GeneratedValue
	private int Customization_id;
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="product_id")
	private Product product_id;
	@Lob
	private String front_image_to_insert;
	private String front_upper_text;
	private String front_lower_text;
	private int text_size;
	private String t_shirt_color;
	private String text_color;
	
	
	public int getCustomization_id() {
		return Customization_id;
	}
	public void setCustomization_id(int customization_id) {
		Customization_id = customization_id;
	}
	public Product getProduct_id() {
		return product_id;
	}
	public void setProduct_id(Product product_id) {
		this.product_id = product_id;
	}
	public String getFront_image_to_insert() {
		return front_image_to_insert;
	}
	public void setFront_image_to_insert(String front_image_to_insert) {
		this.front_image_to_insert = front_image_to_insert;
	}
	public String getFront_upper_text() {
		return front_upper_text;
	}
	public void setFront_upper_text(String front_upper_text) {
		this.front_upper_text = front_upper_text;
	}
	public String getFront_lower_text() {
		return front_lower_text;
	}
	public void setFront_lower_text(String front_lower_text) {
		this.front_lower_text = front_lower_text;
	}
	public int getText_size() {
		return text_size;
	}
	public void setText_size(int text_size) {
		this.text_size = text_size;
	}
	public String getT_shirt_color() {
		return t_shirt_color;
	}
	public void setT_shirt_color(String t_shirt_color) {
		this.t_shirt_color = t_shirt_color;
	}
	public String getText_color() {
		return text_color;
	}
	public void setText_color(String text_color) {
		this.text_color = text_color;
	}
	public Customization(Product product_id, String front_image_to_insert, String front_upper_text,
			String front_lower_text, int text_size, String t_shirt_color, String text_color) {
		super();
		this.product_id = product_id;
		this.front_image_to_insert = front_image_to_insert;
		this.front_upper_text = front_upper_text;
		this.front_lower_text = front_lower_text;
		this.text_size = text_size;
		this.t_shirt_color = t_shirt_color;
		this.text_color = text_color;
	}
	public Customization(String front_image_to_insert, String front_upper_text, String front_lower_text, int text_size,
			String t_shirt_color, String text_color) {
		super();
		this.front_image_to_insert = front_image_to_insert;
		this.front_upper_text = front_upper_text;
		this.front_lower_text = front_lower_text;
		this.text_size = text_size;
		this.t_shirt_color = t_shirt_color;
		this.text_color = text_color;
	}
}
