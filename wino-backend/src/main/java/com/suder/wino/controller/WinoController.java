package com.suder.wino.controller;

import com.suder.wino.dto.WinoDto;
import com.suder.wino.service.WinoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wina")
public class WinoController {

    private final WinoService winoService;

    @Autowired
    public WinoController(WinoService winoService) {
        this.winoService = winoService;
    }

    @GetMapping
    public List<WinoDto> getAllWina() {
        return winoService.getAllWina();
    }

    @GetMapping("/{id}")
    public WinoDto getWinoById(@PathVariable Long id) {
        return winoService.getWinoById(id);
    }

    @PostMapping
    public WinoDto createWino(@RequestBody WinoDto winoDTO) {
        return winoService.createWino(winoDTO);
    }

    @PutMapping("/{id}")
    public WinoDto updateWino(@PathVariable Long id, @RequestBody WinoDto winoDTO) {
        return winoService.updateWino(id, winoDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteWino(@PathVariable Long id) {
        winoService.deleteWino(id);
    }
}
