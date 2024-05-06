package com.suder.wino.service.impl;

import com.suder.wino.dto.MagazynDto;
import com.suder.wino.entity.Magazyn;
import com.suder.wino.exception.ResourceNotFoundException;
import com.suder.wino.mapper.MagazynMapper;
import com.suder.wino.repository.MagazynRepository;
import com.suder.wino.service.MagazynService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MagazynServiceImpl implements MagazynService {

    private final MagazynRepository magazynRepository;

    @Override
    public MagazynDto createMagazyn(MagazynDto magazynDto) {
        Magazyn magazyn = MagazynMapper.mapToMagazyn(magazynDto);
        Magazyn savedMagazyn = magazynRepository.save(magazyn);
        return MagazynMapper.mapToMagazynDto(savedMagazyn);
    }

    @Override
    public MagazynDto getMagazynById(Long magazynId) {
        Magazyn magazyn = magazynRepository.findById(magazynId)
                .orElseThrow(() -> new ResourceNotFoundException("Magazyn z podanym id nie istnieje: " + magazynId));
        return MagazynMapper.mapToMagazynDto(magazyn);
    }

    @Override
    public List<MagazynDto> getAllMagazyny() {
        List<Magazyn> magazyny = magazynRepository.findAll();
        return magazyny.stream().map(MagazynMapper::mapToMagazynDto).collect(Collectors.toList());
    }

    @Override
    public MagazynDto updateMagazyn(Long magazynId, MagazynDto updatedMagazyn) {
        Magazyn magazyn = magazynRepository.findById(magazynId)
                .orElseThrow(() -> new ResourceNotFoundException("Magazyn z podanym id nie istnieje: " + magazynId));

        magazyn.setLokalizacja(updatedMagazyn.getLokalizacja());
        magazyn.setTemperatura(updatedMagazyn.getTemperatura());
        magazyn.setWilgotnosc(updatedMagazyn.getWilgotnosc());
        magazyn.setPojemnosc(updatedMagazyn.getPojemnosc());
        magazyn.setIloscButelek(updatedMagazyn.getIloscButelek());

        Magazyn updatedMagazynObj = magazynRepository.save(magazyn);

        return MagazynMapper.mapToMagazynDto(updatedMagazynObj);
    }

    @Override
    public void deleteMagazyn(Long magazynId) {
        Magazyn magazyn = magazynRepository.findById(magazynId)
                .orElseThrow(() -> new ResourceNotFoundException("Magazyn z podanym id nie istnieje: " + magazynId));

        magazynRepository.delete(magazyn);
    }
}
