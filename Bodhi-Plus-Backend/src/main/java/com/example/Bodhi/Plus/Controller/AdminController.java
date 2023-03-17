package com.example.Bodhi.Plus.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.Bodhi.Plus.Model.Admin;
import com.example.Bodhi.Plus.Service.AdminService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@CrossOrigin
@RequestMapping("/Admin")
public class AdminController {
	@Autowired
	AdminService AdminSer;
	@Operation(summary = "Creates a new Admin")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "Admin details created successfully"),
			@ApiResponse(responseCode = "400", description = "Given details are invalid") })
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value="/signup",produces = "application/json")
	public ResponseEntity<Admin> createUser(final @RequestBody Admin admin) {
		Admin createAdmin = AdminSer.createAdmin(admin);
		return ResponseEntity.ok(createAdmin);
	}
}