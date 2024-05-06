package com.suder.wino.service;

import com.suder.wino.dto.OdmianaDto;

import java.util.List;

public interface OdmianaService {

    List<OdmianaDto> getAllOdmiany();

    OdmianaDto getOdmianaById(Long id);

    OdmianaDto createOdmiana(OdmianaDto odmianaDTO);

    OdmianaDto updateOdmiana(Long id, OdmianaDto odmianaDTO);

    void deleteOdmiana(Long id);
}
