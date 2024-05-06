package com.suder.wino.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WinoDto {

    private Long id;
    private String nazwa;
    private Integer rocznik;
    private Long odmianaId;
    private Double zawartoscAlkoholu;
    private String poziomSlodyczy;
    private Double cena;
    private Long winnicaId;
}
