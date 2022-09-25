package com.Trendy_T.pojo;

public class CustomizeInfo {

	private String front_image_to_insert;
	private String front_upper_text;
	private String front_lower_text;
	private int text_size;
	private String t_shirt_color;
	public CustomizeInfo(String front_image_to_insert, String front_upper_text, String front_lower_text, int text_size,
			String t_shirt_color, String text_color, String email) {
		super();
		this.front_image_to_insert = front_image_to_insert;
		this.front_upper_text = front_upper_text;
		this.front_lower_text = front_lower_text;
		this.text_size = text_size;
		this.t_shirt_color = t_shirt_color;
		this.text_color = text_color;
		this.email = email;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	private String text_color;
	private String email;
	
	
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
	public CustomizeInfo(String front_image_to_insert, String front_upper_text, String front_lower_text, int text_size,
			String t_shirt_color, String text_color) {
		super();
		this.front_image_to_insert = front_image_to_insert;
		this.front_upper_text = front_upper_text;
		this.front_lower_text = front_lower_text;
		this.text_size = text_size;
		this.t_shirt_color = t_shirt_color;
		this.text_color = text_color;
	}
	
	public CustomizeInfo() {
		super();
	}
	
	
}
