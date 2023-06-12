package com.example.Iron.Fusion.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Iron.Fusion.Model.Admin;
import com.example.Iron.Fusion.Repos.AdminRepository;


@Service
public class AdminService {

	@Autowired
	AdminRepository AdminRep;
	
	public Admin createAdmin(Admin admin)
	{
		return AdminRep.save(admin);
	}
}
