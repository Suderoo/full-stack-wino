package com.suder.wino.service.impl;

import com.suder.wino.dto.PracownikDto;
import com.suder.wino.entity.Pracownik;
import com.suder.wino.exception.ResourceNotFoundException;
import com.suder.wino.mapper.PracownikMapper;
import com.suder.wino.repository.PracownikRepository;
import com.suder.wino.service.PracownikService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PracownikServiceImpl implements PracownikService {

    private PracownikRepository pracownikRepository;
    @Override
    public PracownikDto createPracownik(PracownikDto pracownikDto) {

        Pracownik pracownik = PracownikMapper.mapToPracownik(pracownikDto);
        Pracownik savedPracownik = pracownikRepository.save(pracownik);
        return PracownikMapper.mapToPracownikDto(savedPracownik);
    }

    @Override
    public PracownikDto getPracownikById(Long pracownikId) {
        Pracownik pracownik = pracownikRepository.findById(pracownikId).orElseThrow(()-> new ResourceNotFoundException("Pracownik z podanym id nie istnieje: " + pracownikId));
        return PracownikMapper.mapToPracownikDto(pracownik);
    }

    @Override
    public List<PracownikDto> getAllPracownicy() {
        List<Pracownik> pracownicy = pracownikRepository.findAll();
        return pracownicy.stream().map((pracownik) -> PracownikMapper.mapToPracownikDto(pracownik)).collect(Collectors.toList());
    }

    @Override
    public PracownikDto updatePracownik(Long pracownikId, PracownikDto utworzonyPracownik) {
        Pracownik pracownik = pracownikRepository.findById(pracownikId).orElseThrow(() -> new ResourceNotFoundException("Pracownik z podanym id nie istnieje: " + pracownikId));

        pracownik.setImie(utworzonyPracownik.getImie());
        pracownik.setNazwisko(utworzonyPracownik.getNazwisko());
        pracownik.setEmail(utworzonyPracownik.getEmail());
        pracownik.setNumerTelefonu(utworzonyPracownik.getNumerTelefonu());
        pracownik.setStanowisko(utworzonyPracownik.getStanowisko());
        pracownik.setWynagrodzenie(utworzonyPracownik.getWynagrodzenie());

        Pracownik utworzonyPracownikObj = pracownikRepository.save(pracownik);

        return PracownikMapper.mapToPracownikDto(utworzonyPracownikObj);
    }

    @Override
    public void deletePracownik(Long pracownikId) {

        Pracownik pracownik = pracownikRepository.findById(pracownikId).orElseThrow(()-> new ResourceNotFoundException("Pracownik z podanym id nie istnieje: " + pracownikId));

        pracownikRepository.deleteById(pracownikId);
    }
}
