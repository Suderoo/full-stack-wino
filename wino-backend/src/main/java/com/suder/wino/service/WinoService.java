package com.suder.wino.service;

import com.suder.wino.dto.WinoDto;

import java.util.List;

public interface WinoService {

    List<WinoDto> getAllWina();

    WinoDto getWinoById(Long id);

    WinoDto createWino(WinoDto winoDTO);

    WinoDto updateWino(Long id, WinoDto winoDTO);

    void deleteWino(Long id);
}
