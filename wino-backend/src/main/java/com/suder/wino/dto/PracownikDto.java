package com.suder.wino.dto;

import com.suder.wino.entity.Winnica;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PracownikDto {
    private Long id;
    private String imie;
    private String nazwisko;
    private String email;
    private String numerTelefonu;
    private String stanowisko;
    private Double wynagrodzenie;
    private Winnica winnica;
}
