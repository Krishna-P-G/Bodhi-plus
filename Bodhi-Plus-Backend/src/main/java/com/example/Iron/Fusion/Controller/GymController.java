package com.example.Iron.Fusion.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Iron.Fusion.Model.GymModel;
import com.example.Iron.Fusion.ServiceInt.GymService;

@RestController
@RequestMapping(value="/gym")
@CrossOrigin("*")
public class GymController{
	@Autowired
	private GymService gymService;
	
	@GetMapping(value="/getall")
	private ResponseEntity<Object> getGyms() 
	{
		List<GymModel> gymList = gymService.getGyms();
		return new ResponseEntity<>(gymList, HttpStatus.OK);
	}

	@GetMapping(value="/getbyid/{gymId}")
	private ResponseEntity<Object> getGymbyid(@PathVariable int gymId) 
	{
		boolean isGymExistbyid = gymService.isGymExistbyid(gymId);
		if (isGymExistbyid)
		{
		GymModel gymModel = gymService.getGymbyid(gymId);
		return new ResponseEntity<>(gymModel, HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>("ID not found",HttpStatus.OK);
		}
	}
	
	@GetMapping(value="/getbyname/{gymName}")
	private ResponseEntity<Object> getGymbyname(@PathVariable String gymName) 
	{
		List<GymModel> gymModel = gymService.getGymbyname(gymName);
		return new ResponseEntity<>(gymModel, HttpStatus.OK);
	}
	
	
	
	
	@PostMapping(value="/add")
	public String createGym(@RequestBody GymModel gymModel)
	{
		boolean isGymExist = gymService.isGymExist(gymModel.getGymName());
		if(isGymExist)
			return "Gym exists already";
		else {
		gymModel = gymService.createGym(gymModel);
		return "Gym added";}
	}
	
	
	@DeleteMapping(value="/delete")
	public ResponseEntity<Object> deleteGym(@RequestParam int gymId)
	{
			gymService.deleteGym(gymId);
			return new ResponseEntity<>("R.I.P."
					+ "\nCause of Death : GymPageModel Deletion", HttpStatus.OK);
	}
	
	
	@PutMapping(value="/edit/{gymId}")
	public ResponseEntity<Object> updateGym(@PathVariable int gymId, @RequestBody GymModel gymModel)
	{
			gymModel.setGymId(gymId);
			gymService.updateGym(gymModel);
			return new ResponseEntity<>("GymPageModel details are updated successsfully !", HttpStatus.OK);
	}
		
	
}