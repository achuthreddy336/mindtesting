package com.wecp.progressive.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wecp.progressive.entitiy.Equipment;
import com.wecp.progressive.entitiy.Hospital;
import com.wecp.progressive.repository.EquipmentRepository;
import com.wecp.progressive.repository.HospitalRepository;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class EquipmentService {

    @Autowired
    private EquipmentRepository equipmentRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    public Equipment addEquipment(Long hospitalId, Equipment equipment) {
        // Check if the hospital with the given ID exists
        Hospital hospital = hospitalRepository.findById(hospitalId)
                .orElseThrow(() -> new EntityNotFoundException("Hospital not found with ID: " + hospitalId));

        // Set the hospital for the equipment
        equipment.setHospital(hospital);
        return equipmentRepository.save(equipment);
    }

    public List<Equipment> getAllEquipmentOfHospital(Long hospitalId) {
        return equipmentRepository.findByHospitalId(hospitalId);
    }
}
