package com.wecp.progressive.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wecp.progressive.entitiy.Hospital;
import com.wecp.progressive.repository.HospitalRepository;

@Service
public class HospitalService {


    @Autowired
    private HospitalRepository hospitalRepository;

    public List<Hospital> getAllHospitals() {
        return hospitalRepository.findAll();
    }

    public Hospital createHospital(Hospital hospital) {
        return hospitalRepository.save(hospital);
    }
}
