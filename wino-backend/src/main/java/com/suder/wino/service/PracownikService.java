package com.suder.wino.service;

import com.suder.wino.dto.PracownikDto;

import java.util.List;

public interface PracownikService {
    PracownikDto createPracownik(PracownikDto pracownikDto);

    PracownikDto getPracownikById(Long pracownikId);

    List<PracownikDto> getAllPracownicy();

    PracownikDto updatePracownik(Long pracownikId, PracownikDto utworzonyPracownik);

    void deletePracownik(Long pracownikId);
}
