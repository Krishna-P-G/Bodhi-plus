package com.example.Bodhi.Plus.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Bodhi.Plus.Model.Admin;
import com.example.Bodhi.Plus.Repos.AdminRepository;


@Service
public class AdminService {

	@Autowired
	AdminRepository AdminRep;
	
	public Admin createAdmin(Admin admin)
	{
		return AdminRep.save(admin);
	}
}
