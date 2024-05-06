package com.suder.wino.service;

import com.suder.wino.dto.WinnicaDto;

import java.util.List;

public interface WinnicaService {

    List<WinnicaDto> getAllWinnice();

    WinnicaDto getWinnicaById(Long id);

    WinnicaDto createWinnica(WinnicaDto winnicaDTO);

    WinnicaDto updateWinnica(Long id, WinnicaDto winnicaDTO);

    void deleteWinnica(Long id);
}
