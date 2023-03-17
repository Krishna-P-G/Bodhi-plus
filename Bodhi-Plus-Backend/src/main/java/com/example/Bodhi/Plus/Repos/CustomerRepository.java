package com.example.Bodhi.Plus.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Bodhi.Plus.Model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
	
}
