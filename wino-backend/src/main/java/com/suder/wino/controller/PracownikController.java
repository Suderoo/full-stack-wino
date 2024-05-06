package com.suder.wino.controller;

import com.suder.wino.dto.PracownikDto;
import com.suder.wino.service.PracownikService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@NoArgsConstructor
@AllArgsConstructor
@RestController
@RequestMapping("/api/pracownicy")
public class PracownikController {

    @Autowired
    private PracownikService pracownikService;

    // dodawanie REST API
    @PostMapping
    public ResponseEntity<PracownikDto> createPracownik(@RequestBody PracownikDto pracownikDto){
        PracownikDto savedPracownik = pracownikService.createPracownik(pracownikDto);
        return  new ResponseEntity<>(savedPracownik, HttpStatus.CREATED);
    }

    // znajdowanie REST API
    @GetMapping("{id}")
    public ResponseEntity<PracownikDto> getPracownikById(@PathVariable("id") Long pracownikId){
        PracownikDto pracownikDto = pracownikService.getPracownikById(pracownikId);
        return ResponseEntity.ok(pracownikDto);
    }
    // pokazywanie wszystkich REST API
    @GetMapping
    public ResponseEntity<List<PracownikDto>> getAllPracownicy(){
        List<PracownikDto> pracownicy = pracownikService.getAllPracownicy();
        return ResponseEntity.ok(pracownicy);
    }
    // edycja REST API
    @PutMapping("{id}")
    public ResponseEntity<PracownikDto> updatePracownik(@PathVariable("id") Long pracownikId, @RequestBody PracownikDto updatedPracownik){
        PracownikDto pracownikDto = pracownikService.updatePracownik(pracownikId, updatedPracownik);
        return ResponseEntity.ok(pracownikDto);
    }
    // usuwanie REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePracownik(@PathVariable("id") Long pracownikId){
        pracownikService.deletePracownik(pracownikId);
        return ResponseEntity.ok("Pracownik został usunięty!");
    }

}
