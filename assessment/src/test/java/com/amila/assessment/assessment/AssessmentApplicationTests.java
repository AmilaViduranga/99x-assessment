package com.amila.assessment.assessment;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.amila.assessment.assessment.controllers.PriceCalculatorController;
import com.amila.assessment.assessment.models.PriceCalculator;
import com.amila.assessment.assessment.repositories.PriceCalculatorRepository;

import org.junit.Assert;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AssessmentApplicationTests {

	private PriceCalculatorController priceController = new PriceCalculatorController();
	private PriceCalculator instance = new PriceCalculator();
	
	@Autowired
	PriceCalculatorRepository priceCalculatoorRepository;
	
	@Test
	public void contextLoads() {
	}
	
	@Test
	public void IsPricesGenerated() {
		instance.setProductName("sample");
		instance.setCartonPrice(234);
		instance.setUnitsOfCarton(25);
		
	    PriceCalculator createdInstance = priceController.createNewPrice(instance);
		PriceCalculator foundInstance = priceCalculatoorRepository.findById(createdInstance.getId()).get();
		Assert.assertEquals(instance.getProductName(), foundInstance.getProductName());
	}

}
