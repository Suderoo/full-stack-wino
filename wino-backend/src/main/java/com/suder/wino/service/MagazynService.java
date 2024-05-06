package com.suder.wino.service;

import com.suder.wino.dto.MagazynDto;

import java.util.List;

public interface MagazynService {
    MagazynDto createMagazyn(MagazynDto magazynDto);

    MagazynDto getMagazynById(Long magazynId);

    List<MagazynDto> getAllMagazyny();

    MagazynDto updateMagazyn(Long magazynId, MagazynDto updatedMagazyn);

    void deleteMagazyn(Long magazynId);
}
