package com.suder.wino.controller;

import com.suder.wino.dto.MagazynDto;
import com.suder.wino.service.MagazynService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/magazyny")
public class MagazynController {

    private final MagazynService magazynService;

    @PostMapping
    public ResponseEntity<MagazynDto> createMagazyn(@RequestBody MagazynDto magazynDto) {
        MagazynDto savedMagazyn = magazynService.createMagazyn(magazynDto);
        return new ResponseEntity<>(savedMagazyn, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MagazynDto> getMagazynById(@PathVariable("id") Long magazynId) {
        MagazynDto magazynDto = magazynService.getMagazynById(magazynId);
        return ResponseEntity.ok(magazynDto);
    }

    @GetMapping
    public ResponseEntity<List<MagazynDto>> getAllMagazyny() {
        List<MagazynDto> magazynyDto = magazynService.getAllMagazyny();
        return ResponseEntity.ok(magazynyDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MagazynDto> updateMagazyn(@PathVariable("id") Long magazynId, @RequestBody MagazynDto updatedMagazyn) {
        MagazynDto magazynDto = magazynService.updateMagazyn(magazynId, updatedMagazyn);
        return ResponseEntity.ok(magazynDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMagazyn(@PathVariable("id") Long magazynId) {
        magazynService.deleteMagazyn(magazynId);
        return ResponseEntity.noContent().build();
    }
}
