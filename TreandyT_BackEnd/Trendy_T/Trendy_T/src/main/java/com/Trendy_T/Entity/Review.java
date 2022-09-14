package com.Trendy_T.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="review_tbl")
public class Review {
	
		@Id
		@GeneratedValue
		private int review_id ;
	 	private int rating ;    
	 	private String comment;
		public int getReview_id() {
			return review_id;
		}
		public void setReview_id(int review_id) {
			this.review_id = review_id;
		}
		
		public int getRating() {
			return rating;
		}
		public void setRating(int rating) {
			this.rating = rating;
		}
		public String getComment() {
			return comment;
		}
		public void setComment(String comment) {
			this.comment = comment;
		}
		
		public Review() {
			super();
		}
		public Review(int review_id, List<User> user_id, List<Product> product_id, int rating, String comment) {
			super();
			this.review_id = review_id;
			this.rating = rating;
			this.comment = comment;
		}
		
}
