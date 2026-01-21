package com.ecobazaar.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecobazaar.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
