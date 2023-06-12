package com.example.Iron.Fusion.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="gym")
public class GymModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gymId;
	private String gymName;
	private String gymUrl;
	private float gymRate;
	private String gymDescription;
	public int getGymId() {
		return gymId;
	}
	public void setGymId(int gymId) {
		this.gymId = gymId;
	}
	public String getGymName() {
		return gymName;
	}
	public void setGymName(String gymName) {
		this.gymName = gymName;
	}
	public String getGymUrl() {
		return gymUrl;
	}
	public void setGymUrl(String gymUrl) {
		this.gymUrl = gymUrl;
	}
	public float getGymRate() {
		return gymRate;
	}
	public void setGymRate(float gymRate) {
		this.gymRate = gymRate;
	}
	public String getGymDescription() {
		return gymDescription;
	}
	public void setGymDescription(String gymDescription) {
		this.gymDescription = gymDescription;
	}
	public GymModel(int gymId, String gymName, String gymUrl, float gymRate, String gymDescription) {
		super();
		this.gymId = gymId;
		this.gymName = gymName;
		this.gymUrl = gymUrl;
		this.gymRate = gymRate;
		this.gymDescription = gymDescription;
	}
	@Override
	public String toString() {
		return "GymModel [gymId=" + gymId + ", gymName=" + gymName + ", gymUrl=" + gymUrl + ", gymRate=" + gymRate
				+ ", gymDescription=" + gymDescription + "]";
	}
	
	public GymModel()
	{
		
	}
}