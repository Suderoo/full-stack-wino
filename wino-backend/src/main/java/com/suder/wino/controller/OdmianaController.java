package com.suder.wino.controller;

import com.suder.wino.dto.OdmianaDto;
import com.suder.wino.service.OdmianaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/odmiany")
public class OdmianaController {

    private final OdmianaService odmianaService;

    @Autowired
    public OdmianaController(OdmianaService odmianaService) {
        this.odmianaService = odmianaService;
    }

    @GetMapping
    public List<OdmianaDto> getAllOdmiany() {
        return odmianaService.getAllOdmiany();
    }

    @GetMapping("/{id}")
    public OdmianaDto getOdmianaById(@PathVariable Long id) {
        return odmianaService.getOdmianaById(id);
    }

    @PostMapping
    public OdmianaDto createOdmiana(@RequestBody OdmianaDto odmianaDTO) {
        return odmianaService.createOdmiana(odmianaDTO);
    }

    @PutMapping("/{id}")
    public OdmianaDto updateOdmiana(@PathVariable Long id, @RequestBody OdmianaDto odmianaDTO) {
        return odmianaService.updateOdmiana(id, odmianaDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteOdmiana(@PathVariable Long id) {
        odmianaService.deleteOdmiana(id);
    }
}
