package com.urbanblack.agentportal.service.impl;

import com.urbanblack.agentportal.dto.VehicleDTO;
import com.urbanblack.agentportal.entity.Agent;
import com.urbanblack.agentportal.entity.Vehicle;
import com.urbanblack.agentportal.entity.enums.VehicleStatus;
import com.urbanblack.agentportal.repository.AgentRepository;
import com.urbanblack.agentportal.repository.VehicleRepository;
import com.urbanblack.agentportal.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private AgentRepository agentRepository;

    @Override
    public VehicleDTO registerVehicle(VehicleDTO vehicleDTO) {
        Agent agent = agentRepository.findById(vehicleDTO.getAgentId())
                .orElseThrow(() -> new RuntimeException("Agent not found"));

        Vehicle vehicle = Vehicle.builder()
                .agent(agent)
                .model(vehicleDTO.getModel())
                .licensePlate(vehicleDTO.getLicensePlate())
                .color(vehicleDTO.getColor())
                .year(vehicleDTO.getYear())
                .status(VehicleStatus.PENDING)
                .build();

        return mapToDTO(vehicleRepository.save(vehicle));
    }

    @Override
    public List<VehicleDTO> getVehiclesByAgent(Long agentId) {
        return vehicleRepository.findByAgentId(agentId).stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public VehicleDTO updateVehicle(Long vehicleId, VehicleDTO vehicleDTO) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));
        
        vehicle.setModel(vehicleDTO.getModel());
        vehicle.setColor(vehicleDTO.getColor());
        vehicle.setYear(vehicleDTO.getYear());
        
        return mapToDTO(vehicleRepository.save(vehicle));
    }

    @Override
    public void verifyVehicle(Long vehicleId, String status) {
        Vehicle vehicle = vehicleRepository.findById(vehicleId)
                .orElseThrow(() -> new RuntimeException("Vehicle not found"));
        vehicle.setStatus(VehicleStatus.valueOf(status.toUpperCase()));
        vehicleRepository.save(vehicle);
    }

    private VehicleDTO mapToDTO(Vehicle vehicle) {
        VehicleDTO dto = new VehicleDTO();
        dto.setId(vehicle.getId());
        dto.setAgentId(vehicle.getAgent().getId());
        dto.setModel(vehicle.getModel());
        dto.setLicensePlate(vehicle.getLicensePlate());
        dto.setColor(vehicle.getColor());
        dto.setYear(vehicle.getYear());
        dto.setStatus(vehicle.getStatus());
        return dto;
    }
}
