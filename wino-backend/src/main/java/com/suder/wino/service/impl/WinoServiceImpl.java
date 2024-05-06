package com.suder.wino.service.impl;

import com.suder.wino.dto.WinoDto;
import com.suder.wino.entity.Wino;
import com.suder.wino.mapper.WinoMapper;
import com.suder.wino.repository.WinoRepository;
import com.suder.wino.service.WinoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class WinoServiceImpl implements WinoService {

    private final WinoRepository winoRepository;
    private final WinoMapper winoMapper;

    @Autowired
    public WinoServiceImpl(WinoRepository winoRepository, WinoMapper winoMapper) {
        this.winoRepository = winoRepository;
        this.winoMapper = winoMapper;
    }

    @Override
    public List<WinoDto> getAllWina() {
        return winoRepository.findAll().stream()
                .map(winoMapper::mapToWinoDTO)
                .collect(Collectors.toList());
    }

    @Override
    public WinoDto getWinoById(Long id) {
        return winoMapper.mapToWinoDTO(winoRepository.findById(id).orElse(null));
    }

    @Override
    public WinoDto createWino(WinoDto winoDTO) {
        return winoMapper.mapToWinoDTO(winoRepository.save(winoMapper.mapToWino(winoDTO)));
    }

    @Override
    public WinoDto updateWino(Long id, WinoDto winoDTO) {
        Wino existingWino = winoRepository.findById(id).orElse(null);
        if (existingWino != null) {
            winoMapper.updateWinoFromDTO(winoDTO, existingWino); // Aktualizacja encji Wino
            return winoMapper.mapToWinoDTO(winoRepository.save(existingWino));
        }
        return null;
    }

    @Override
    public void deleteWino(Long id) {
        winoRepository.deleteById(id);
    }
}
