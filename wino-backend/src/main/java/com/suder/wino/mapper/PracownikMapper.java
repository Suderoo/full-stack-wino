package com.suder.wino.mapper;

import com.suder.wino.dto.PracownikDto;
import com.suder.wino.entity.Pracownik;

public class PracownikMapper {

    public static PracownikDto mapToPracownikDto(Pracownik pracownik){
        return new PracownikDto(
                pracownik.getId(),
                pracownik.getImie(),
                pracownik.getNazwisko(),
                pracownik.getEmail(),
                pracownik.getNumerTelefonu(),
                pracownik.getStanowisko(),
                pracownik.getWynagrodzenie(),
                pracownik.getWinnica()
        );
    }

    public static Pracownik mapToPracownik(PracownikDto pracownikDto){
        return new Pracownik(
                pracownikDto.getId(),
                pracownikDto.getImie(),
                pracownikDto.getNazwisko(),
                pracownikDto.getEmail(),
                pracownikDto.getNumerTelefonu(),
                pracownikDto.getStanowisko(),
                pracownikDto.getWynagrodzenie(),
                pracownikDto.getWinnica()
        );
    }
}
