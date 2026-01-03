package com.wecp.progressive.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wecp.progressive.entitiy.Hospital;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long> {
    // Additional query methods if needed
}

