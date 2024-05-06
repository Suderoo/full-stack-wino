package com.suder.wino.service.impl;

import com.suder.wino.dto.WinnicaDto;
import com.suder.wino.entity.Winnica;
import com.suder.wino.mapper.WinnicaMapper;
import com.suder.wino.repository.WinnicaRepository;
import com.suder.wino.service.WinnicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WinnicaServiceImpl implements WinnicaService {

    private final WinnicaRepository winnicaRepository;
    private final WinnicaMapper winnicaMapper;

    @Autowired
    public WinnicaServiceImpl(WinnicaRepository winnicaRepository, WinnicaMapper winnicaMapper) {
        this.winnicaRepository = winnicaRepository;
        this.winnicaMapper = winnicaMapper;
    }

    @Override
    public List<WinnicaDto> getAllWinnice() {
        return winnicaRepository.findAll().stream()
                .map(winnicaMapper::mapToWinnicaDTO)
                .collect(Collectors.toList());
    }

    @Override
    public WinnicaDto getWinnicaById(Long id) {
        Winnica winnica = winnicaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Winnica o podanym id nie istnieje: " + id));
        return winnicaMapper.mapToWinnicaDTO(winnica);
    }

    @Override
    public WinnicaDto createWinnica(WinnicaDto winnicaDTO) {
        Winnica winnica = winnicaMapper.mapToWinnica(winnicaDTO);
        winnica = winnicaRepository.save(winnica);
        return winnicaMapper.mapToWinnicaDTO(winnica);
    }

    @Override
    public WinnicaDto updateWinnica(Long id, WinnicaDto winnicaDTO) {
        Winnica existingWinnica = winnicaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Winnica o podanym id nie istnieje: " + id));

        Winnica updatedWinnica = winnicaMapper.mapToWinnica(winnicaDTO);
        updatedWinnica.setId(existingWinnica.getId()); // zachowaj istniejące ID
        updatedWinnica = winnicaRepository.save(updatedWinnica);
        return winnicaMapper.mapToWinnicaDTO(updatedWinnica);
    }

    @Override
    public void deleteWinnica(Long id) {
        winnicaRepository.deleteById(id);
    }
}
