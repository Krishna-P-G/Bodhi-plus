package com.example.Bodhi.Plus.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Bodhi.Plus.Model.Customer;
import com.example.Bodhi.Plus.Repos.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository CusRep;
	
	public Customer createCus(Customer cus)
	{
		return CusRep.save(cus);
	}
}
