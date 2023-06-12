package com.example.Iron.Fusion.ServiceInt;

import java.util.List;

import com.example.Iron.Fusion.Model.GymModel;

public interface GymService{

	public abstract List<GymModel> getGyms();

	public abstract GymModel createGym(GymModel gymModel);

	public abstract void updateGym(GymModel gymModel);

	public abstract void deleteGym(Integer gymId);

	public abstract boolean isGymExist(String gymName);

	public abstract boolean isGymExistbyid(int gymId);

    public abstract GymModel getGymbyid(int gymId);

    public abstract List<GymModel> getGymbyname(String gymName);
	
}