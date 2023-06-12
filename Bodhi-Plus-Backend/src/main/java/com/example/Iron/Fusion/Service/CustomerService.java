package com.example.Iron.Fusion.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Iron.Fusion.Model.Customer;
import com.example.Iron.Fusion.Repos.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository CusRep;
	
	public Customer createCus(Customer cus)
	{
		return CusRep.save(cus);
	}
}
