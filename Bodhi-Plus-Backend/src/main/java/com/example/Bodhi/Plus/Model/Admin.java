package com.example.Bodhi.Plus.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Admin_data")
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	private int phno;
	private String email1;
	private String password1;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getPhno() {
		return phno;
	}
	public void setPhno(int phno) {
		this.phno = phno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail1() {
		return email1;
	}
	public void setEmail(String email1) {
		this.email1 = email1;
	}
	public String getPassword1() {
		return password1;
	}
	public void setPassword(String password1) {
		this.password1 = password1;
	}
	
	@Override
	public String toString() {
		return "Doctor [id=" + id + ", name=" + name + ", phno=" + phno + ", email1=" + email1 + ", password1="
				+ password1 + "]";
	}
	
	
	public Admin(long id, String name, int phno, String email1, String password1) {
		super();
		this.id = id;
		this.name = name;
		this.phno = phno;
		this.email1 = email1;
		this.password1 = password1;
	}
	
	public Admin()
	{
		
	}
	
}
