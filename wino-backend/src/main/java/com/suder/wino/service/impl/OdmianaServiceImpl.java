package com.suder.wino.service.impl;

import com.suder.wino.dto.OdmianaDto;
import com.suder.wino.entity.Odmiana;
import com.suder.wino.mapper.OdmianaMapper;
import com.suder.wino.repository.OdmianaRepository;
import com.suder.wino.service.OdmianaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class OdmianaServiceImpl implements OdmianaService {

    private final OdmianaRepository odmianaRepository;
    private final OdmianaMapper odmianaMapper;

    @Autowired
    public OdmianaServiceImpl(OdmianaRepository odmianaRepository, OdmianaMapper odmianaMapper) {
        this.odmianaRepository = odmianaRepository;
        this.odmianaMapper = odmianaMapper;
    }

    @Override
    public List<OdmianaDto> getAllOdmiany() {
        return odmianaRepository.findAll().stream()
                .map(odmianaMapper::mapToOdmianaDTO)
                .collect(Collectors.toList());
    }

    @Override
    public OdmianaDto getOdmianaById(Long id) {
        return odmianaMapper.mapToOdmianaDTO(odmianaRepository.findById(id).orElse(null));
    }

    @Override
    public OdmianaDto createOdmiana(OdmianaDto odmianaDTO) {
        return odmianaMapper.mapToOdmianaDTO(odmianaRepository.save(odmianaMapper.mapToOdmiana(odmianaDTO)));
    }

    @Override
    public OdmianaDto updateOdmiana(Long id, OdmianaDto odmianaDTO) {
        Odmiana existingOdmiana = odmianaRepository.findById(id).orElse(null);
        if (existingOdmiana != null) {
            odmianaMapper.updateOdmianaFromDTO(odmianaDTO, existingOdmiana);
            Odmiana updatedOdmiana = odmianaRepository.save(existingOdmiana);
            return odmianaMapper.mapToOdmianaDTO(updatedOdmiana);
        }
        return null;
    }

    @Override
    public void deleteOdmiana(Long id) {
        odmianaRepository.deleteById(id);
    }
}
