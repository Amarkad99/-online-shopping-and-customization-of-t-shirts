
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
@Table(name="customization_tbl")
public class Customization implements Serializable{
	@Id
	@GeneratedValue
	private int Customization_id;
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="product_id")
	private Product product_id;
	private byte[] front_image_to_insert;
	private byte[] back_image_to_insert;
	private byte[] final_image_front;
	private byte[] final_image_back;
	private String front_text;
	private String back_text;
	
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
	public byte[] getFront_image_to_insert() {
		return front_image_to_insert;
	}
	public void setFront_image_to_insert(byte[] front_image_to_insert) {
		this.front_image_to_insert = front_image_to_insert;
	}
	public byte[] getBack_image_to_insert() {
		return back_image_to_insert;
	}
	public void setBack_image_to_insert(byte[] back_image_to_insert) {
		this.back_image_to_insert = back_image_to_insert;
	}
	public byte[] getFinal_image_front() {
		return final_image_front;
	}
	public void setFinal_image_front(byte[] final_image_front) {
		this.final_image_front = final_image_front;
	}
	public byte[] getFinal_image_back() {
		return final_image_back;
	}
	public void setFinal_image_back(byte[] final_image_back) {
		this.final_image_back = final_image_back;
	}
	public String getFront_text() {
		return front_text;
	}
	public void setFront_text(String front_text) {
		this.front_text = front_text;
	}
	public String getBack_text() {
		return back_text;
	}
	public void setBack_text(String back_text) {
		this.back_text = back_text;
	}
	
	public Customization() {
		super();
	}
	public Customization(Product product_id, byte[] front_image_to_insert, byte[] back_image_to_insert,
			byte[] final_image_front, byte[] final_image_back, String front_text, String back_text) {
		super();
		this.product_id = product_id;
		this.front_image_to_insert = front_image_to_insert;
		this.back_image_to_insert = back_image_to_insert;
		this.final_image_front = final_image_front;
		this.final_image_back = final_image_back;
		this.front_text = front_text;
		this.back_text = back_text;
	}
	public Customization(int Customization_id,Product product_id, byte[] front_image_to_insert, byte[] back_image_to_insert,
			byte[] final_image_front, byte[] final_image_back, String front_text, String back_text) {
		super();
		this.Customization_id=Customization_id;
		this.product_id = product_id;
		this.front_image_to_insert = front_image_to_insert;
		this.back_image_to_insert = back_image_to_insert;
		this.final_image_front = final_image_front;
		this.final_image_back = final_image_back;
		this.front_text = front_text;
		this.back_text = back_text;
	}
	
}
