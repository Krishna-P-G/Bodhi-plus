package com.example.Iron.Fusion.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Iron.Fusion.Model.GymModel;
import com.example.Iron.Fusion.Repos.GymRepo;
import com.example.Iron.Fusion.ServiceInt.GymService;

@Service
public class GymServiceInt implements GymService{
	
	@Autowired
	private GymRepo gymRepo;

	@Override
	public List<GymModel> getGyms() {
		return (List<GymModel>)gymRepo.findAll();
	}

	@Override
	public GymModel createGym(GymModel gymModel) {
		return gymRepo.save(gymModel);
	}

	@Override
	public void deleteGym(Integer gymId) {
		gymRepo.deleteById(gymId);
	}

	@Override
	public void updateGym(GymModel gymModel) {
		gymRepo.save(gymModel);
	}

	@Override
	public boolean isGymExist(String gymName) {
		return gymRepo.existsByGymNameIgnoreCase(gymName);
	}

	@Override
	public boolean isGymExistbyid(int gymId) {
		return gymRepo.existsById(gymId);
	}

	@Override
	public GymModel getGymbyid(int gymId) {
		Optional<GymModel> optional = gymRepo.findById(gymId);
		GymModel gymModel = optional.get();
		return gymModel;
	}
	
	@Override
	public List<GymModel> getGymbyname(String gymName) 
	{
		return (List<GymModel>) gymRepo.findByGymNameContainingIgnoreCase(gymName);
	}
}