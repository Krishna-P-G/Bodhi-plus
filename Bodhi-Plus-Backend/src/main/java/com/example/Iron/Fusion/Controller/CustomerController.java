package com.example.Iron.Fusion.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.Iron.Fusion.Model.Customer;
import com.example.Iron.Fusion.Service.CustomerService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@CrossOrigin
@RequestMapping("/Customer")
public class CustomerController {
	@Autowired
	CustomerService CusSer;
	@Operation(summary = "Creates a new Patient")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "Customer details created successfully"),
			@ApiResponse(responseCode = "400", description = "Given details are invalid") })
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value="/signup",produces = "application/json")
	public ResponseEntity<Customer> createUser(final @RequestBody Customer customer) {
		Customer createCustomer = CusSer.createCus(customer);
		return ResponseEntity.ok(createCustomer);
	}
}