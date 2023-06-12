package com.example.Iron.Fusion.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Iron.Fusion.Model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
	
}
