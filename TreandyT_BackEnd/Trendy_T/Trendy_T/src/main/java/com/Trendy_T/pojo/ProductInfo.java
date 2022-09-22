package com.Trendy_T.pojo;

public class ProductInfo {
	
	private int productid;
	private double price;
	private int quantity;
	private String color;
	private String material;
	private String sleeve;
	private String neck_type;
	private String size;
	private String image_front;
	private String image_back;
	private String image_left;
	private String image_right;
	private int iscustomizable;
	public int getProductid() {
		return productid;
	}
	public void setProductid(int productid) {
		this.productid = productid;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
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
	public int getIscustomizable() {
		return iscustomizable;
	}
	public void setIscustomizable(int iscustomizable) {
		this.iscustomizable = iscustomizable;
	}
	public ProductInfo(int productid, double price, int quantity, String color, String material, String sleeve,
			String neck_type, String size, String image_front, String image_back, String image_left, String image_right,
			int iscustomizable) {
		super();
		this.productid = productid;
		this.price = price;
		this.quantity = quantity;
		this.color = color;
		this.material = material;
		this.sleeve = sleeve;
		this.neck_type = neck_type;
		this.size = size;
		this.image_front = image_front;
		this.image_back = image_back;
		this.image_left = image_left;
		this.image_right = image_right;
		this.iscustomizable = iscustomizable;
	}
	public ProductInfo()
	{
		super();
	}
	

}
