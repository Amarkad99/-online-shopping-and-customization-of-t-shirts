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
@Table(name="review_user_tbl")
public class Review_User {
	@Id
	@GeneratedValue
	private int review_user_id;

	@ManyToMany(mappedBy="review",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private List<User> user_id;

	public int getReview_user_id() {
		return review_user_id;
	}

	public void setReview_user_id(int review_user_id) {
		this.review_user_id = review_user_id;
	}

	public List<User> getUser_id() {
		return user_id;
	}

	public void setUser_id(List<User> user_id) {
		this.user_id = user_id;
	}

	public Review_User() {
		super();
	}

	public Review_User(int review_user_id, List<User> user_id) {
		super();
		this.review_user_id = review_user_id;
		this.user_id = user_id;
	}
	
}
