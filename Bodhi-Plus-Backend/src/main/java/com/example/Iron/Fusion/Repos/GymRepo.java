package com.example.Iron.Fusion.Repos;

import org.springframework.data.repository.CrudRepository;

import com.example.Iron.Fusion.Model.GymModel;

import java.util.List;

public interface GymRepo extends CrudRepository<GymModel, Integer>
{

	boolean existsByGymNameIgnoreCase(String gymName);

    List<GymModel> findByGymNameContainingIgnoreCase(String gymName);
	
}