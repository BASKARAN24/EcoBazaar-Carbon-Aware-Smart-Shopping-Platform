package com.ecobazaar.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecobazaar.backend.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
