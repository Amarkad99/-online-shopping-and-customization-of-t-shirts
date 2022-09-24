package com.Trendy_T.pojo;

import java.util.List;

public class OrderDTO {
private double total_price;
List<ProductInfo> productList;
public OrderDTO(double total_price, List<ProductInfo> productList) {
	super();
	this.total_price = total_price;
	this.productList = productList;
}
public double getTotal_price() {
	return total_price;
}
public void setTotal_price(double total_price) {
	this.total_price = total_price;
}
public List<ProductInfo> getProductList() {
	return productList;
}
public void setProductList(List<ProductInfo> productList) {
	this.productList = productList;
}
}
