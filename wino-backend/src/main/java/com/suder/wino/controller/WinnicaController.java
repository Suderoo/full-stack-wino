package com.suder.wino.controller;

import com.suder.wino.dto.WinnicaDto;
import com.suder.wino.service.WinnicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/winnice")
public class WinnicaController {

    private final WinnicaService winnicaService;

    @Autowired
    public WinnicaController(WinnicaService winnicaService) {
        this.winnicaService = winnicaService;
    }

    @GetMapping
    public ResponseEntity<List<WinnicaDto>> getAllWinnice() {
        List<WinnicaDto> winnice = winnicaService.getAllWinnice();
        return ResponseEntity.ok().body(winnice);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WinnicaDto> getWinnicaById(@PathVariable Long id) {
        WinnicaDto winnica = winnicaService.getWinnicaById(id);
        return ResponseEntity.ok().body(winnica);
    }

    @PostMapping
    public ResponseEntity<WinnicaDto> createWinnica(@RequestBody WinnicaDto winnicaDTO) {
        WinnicaDto createdWinnica = winnicaService.createWinnica(winnicaDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdWinnica);
    }

    @PutMapping("/{id}")
    public ResponseEntity<WinnicaDto> updateWinnica(@PathVariable Long id, @RequestBody WinnicaDto winnicaDTO) {
        WinnicaDto updatedWinnica = winnicaService.updateWinnica(id, winnicaDTO);
        return ResponseEntity.ok().body(updatedWinnica);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWinnica(@PathVariable Long id) {
        winnicaService.deleteWinnica(id);
        return ResponseEntity.noContent().build();
    }
}
