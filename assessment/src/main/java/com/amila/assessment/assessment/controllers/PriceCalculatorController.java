package com.amila.assessment.assessment.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amila.assessment.assessment.repositories.PriceCalculatorRepository;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.amila.assessment.assessment.exceptions.ResourceNotFoundException;
import com.amila.assessment.assessment.models.PriceCalculator;

@RestController
@RequestMapping("/api")
public class PriceCalculatorController {

	class Calculation {
		private Double totalPrice;

		public Double getTotalPrice() {
			return totalPrice;
		}

		public void setTotalPrice(Double totalPrice) {
			this.totalPrice = totalPrice;
		}
		
		
	}
	@Autowired
	PriceCalculatorRepository priceCalculatoorRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/prices/get")
	public List<PriceCalculator> getAllPrices() {
	    return priceCalculatoorRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/prices/add")
	public PriceCalculator createNewPrice(@Valid @RequestBody PriceCalculator newPrice) {
		Double unitPrice = ((newPrice.getCartonPrice() / newPrice.getUnitsOfCarton()) * 0.3) + (newPrice.getCartonPrice() / newPrice.getUnitsOfCarton());
		newPrice.setUnitPrice(unitPrice);
	    return priceCalculatoorRepository.save(newPrice);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/prices/get/{id}")
	public PriceCalculator getPriceById(@PathVariable(value="id") Long priceId) {
		return priceCalculatoorRepository.findById(priceId)
				.orElseThrow(() -> new ResourceNotFoundException("Price", "id", priceId));
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/prices/update/{id}")
	public PriceCalculator updateNote(@PathVariable(value = "id") Long priceId, @Valid @RequestBody PriceCalculator priceDetails) {

		PriceCalculator price = priceCalculatoorRepository.findById(priceId)
	            .orElseThrow(() -> new ResourceNotFoundException("Price", "id", priceId));
		price.setImageUrl(priceDetails.getImageUrl());
		price.setUnitPrice(priceDetails.getUnitPrice());
		price.setCartonPrice(priceDetails.getCartonPrice());
		price.setProductName(priceDetails.getProductName());
		price.setUnitsOfCarton(priceDetails.getUnitsOfCarton());
	    PriceCalculator updatedPrice = priceCalculatoorRepository.save(price);
	    return updatedPrice;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/prices/delete/{id}")
	public ResponseEntity<?> deletePrice(@PathVariable(value="id") Long priceId) {
		PriceCalculator price = priceCalculatoorRepository.findById(priceId)
	            .orElseThrow(() -> new ResourceNotFoundException("Price", "id", priceId));
		priceCalculatoorRepository.delete(price);
		return ResponseEntity.ok().build();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/prices/calculate/{id}/{amount}/{is_carton_request}")
	public Calculation CalculatePrice(@PathVariable(value = "id") Long priceId, @PathVariable(value = "amount") Integer amount, @PathVariable(value = "is_carton_request") boolean is_carton_request) {
		PriceCalculator price = priceCalculatoorRepository.findById(priceId).orElseThrow(() -> new ResourceNotFoundException("Price", "id", priceId));
		Double finalTotal = 0.0;
		if(is_carton_request) {
			finalTotal = (double) (price.getCartonPrice() * amount);
			if(amount >= 3) {
				finalTotal = (price.getCartonPrice() - (price.getCartonPrice() * 0.1)) * amount;
			}
		} else {
			finalTotal = ((price.getCartonPrice() / price.getUnitsOfCarton()) + ((price.getCartonPrice() / price.getUnitsOfCarton()) * 0.3)) * amount;
		}
		Calculation total = new Calculation();
		total.setTotalPrice(finalTotal);
		return total;
	}
}
