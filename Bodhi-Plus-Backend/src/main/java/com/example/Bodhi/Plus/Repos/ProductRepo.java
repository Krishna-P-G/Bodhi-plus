package com.example.Bodhi.Plus.Repos;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import com.example.Bodhi.Plus.Model.ProductModel;

public interface ProductRepo extends CrudRepository<ProductModel, Integer>
{

	boolean existsByProductNameIgnoreCase(String productName);

    List<ProductModel> findByProductNameContainingIgnoreCase(String productName);
	
}