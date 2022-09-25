package com.Trendy_T.pojo;

import java.util.Date;

import com.Trendy_T.Entity.Address;
import com.Trendy_T.Entity.User;

public class OrderContainer {
		private int orderid;
		private User userid;
		private Address address;
		private String status;
		private double totalprice;
		private Date orderDate;
		private Date OrderStatusChangedDate;
		public int getOrderid() {
			return orderid;
		}
		public void setOrderid(int orderid) {
			this.orderid = orderid;
		}
		
		public Address getAddress() {
			return address;
		}
		public void setAddress(Address address) {
			this.address = address;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		public double getTotalprice() {
			return totalprice;
		}
		public void setTotalprice(double totalprice) {
			this.totalprice = totalprice;
		}
		public User getUserid() {
			return userid;
		}
		public void setUserid(User userid) {
			this.userid = userid;
		}
		public Date getOrderDate() {
			return orderDate;
		}
		public void setOrderDate(Date orderDate) {
			this.orderDate = orderDate;
		}
		public Date getOrderStatusChangedDate() {
			return OrderStatusChangedDate;
		}
		public void setOrderStatusChangedDate(Date orderStatusChangedDate) {
			OrderStatusChangedDate = orderStatusChangedDate;
		}
		public OrderContainer(int orderid, User userid, Address address, String status, double totalprice,
				Date orderDate, Date orderStatusChangedDate) {
			super();
			this.orderid = orderid;
			this.userid = userid;
			this.address = address;
			this.status = status;
			this.totalprice = totalprice;
			this.orderDate = orderDate;
			OrderStatusChangedDate = orderStatusChangedDate;
		}
		
		
}
