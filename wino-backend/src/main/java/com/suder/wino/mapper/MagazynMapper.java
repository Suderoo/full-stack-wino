package com.suder.wino.mapper;

import com.suder.wino.dto.MagazynDto;
import com.suder.wino.entity.Magazyn;
import org.springframework.stereotype.Component;

@Component
public class MagazynMapper {

    public static MagazynDto mapToMagazynDto(Magazyn magazyn) {
        MagazynDto magazynDto = new MagazynDto();
        magazynDto.setId(magazyn.getId());
        magazynDto.setLokalizacja(magazyn.getLokalizacja());
        magazynDto.setTemperatura(magazyn.getTemperatura());
        magazynDto.setWilgotnosc(magazyn.getWilgotnosc());
        magazynDto.setPojemnosc(magazyn.getPojemnosc());
        magazynDto.setIloscButelek(magazyn.getIloscButelek());
        if (magazyn.getWino() != null) {
            magazynDto.setWinoId(magazyn.getWino().getId());
        }
        return magazynDto;
    }

    public static Magazyn mapToMagazyn(MagazynDto magazynDto) {
        Magazyn magazyn = new Magazyn();
        magazyn.setId(magazynDto.getId());
        magazyn.setLokalizacja(magazynDto.getLokalizacja());
        magazyn.setTemperatura(magazynDto.getTemperatura());
        magazyn.setWilgotnosc(magazynDto.getWilgotnosc());
        magazyn.setPojemnosc(magazynDto.getPojemnosc());
        magazyn.setIloscButelek(magazynDto.getIloscButelek());
        // Możemy sprawdzić, czy ID wina jest dostępne w DTO
        // if (magazynDto.getWinoId() != null) {
        //     magazyn.setWino(winoRepository.findById(magazynDto.getWinoId()).orElse(null));
        // }
        return magazyn;
    }
}
