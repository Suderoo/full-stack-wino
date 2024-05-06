package com.suder.wino.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WinnicaDto {
    private Long id;
    private String nazwa;
    private String adres;
    private Double powierzchniaUprawna;
    private String rodzajWinorosli;
    private Integer rokZalozenia;
}
