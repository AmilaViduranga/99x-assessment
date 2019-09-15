package com.amila.assessment.assessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amila.assessment.assessment.models.PriceCalculator;

@Repository
public interface PriceCalculatorRepository extends JpaRepository<PriceCalculator, Long>{

}
