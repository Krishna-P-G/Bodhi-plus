package com.example.Bodhi.Plus.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="product")
public class ProductModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	private String productName;
	private String productUrl;
	private float productRate;
	private String productStrip;
	private String availability;
	
	public String isAvailability() {
		return availability;
	}
	public void setAvailability(String availability) {
		this.availability = availability;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductUrl() {
		return productUrl;
	}
	public void setProductUrl(String productUrl) {
		this.productUrl = productUrl;
	}
	public float getProductRate() {
		return productRate;
	}
	public void setProductRate(float productRate) {
		this.productRate = productRate;
	}
	public String getProductStrip() {
		return productStrip;
	}
	public void setProductStrip(String productStrip) {
		this.productStrip = productStrip;
	}
	
	@Override
	public String toString() {
		return "ProductModel [ProductId=" + productId + ", productName=" + productName + ", productUrl=" + productUrl
				+ ", productRate=" + productRate + ", productStrip=" + productStrip + "]";
	}
	public ProductModel(int productId, String productName, String productUrl, float productRate, String productStrip,
			String availability) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productUrl = productUrl;
		this.productRate = productRate;
		this.productStrip = productStrip;
		this.availability = availability;
	}
	public ProductModel()
	{
		
	}
}