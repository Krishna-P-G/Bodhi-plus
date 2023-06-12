package com.example.Iron.Fusion.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Customer_data")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String username;
	private int mobile;
	private String email;
	private String password;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getMobile() {
		return mobile;
	}
	public void setMobile(int mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Patient [id=" + id + ", username=" + username + ", mobile=" + mobile + ", email=" + email + ", password="
				+ password + "]";
	}
	public Customer(long id, String username, int mobile, String email, String password) {
		super();
		this.id = id;
		this.username = username;
		this.mobile = mobile;
		this.email = email;
		this.password = password;
	}
	public Customer()
	{
		
	}
	
}
