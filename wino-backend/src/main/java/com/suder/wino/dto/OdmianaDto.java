package com.suder.wino.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OdmianaDto {

    private Long id;
    private String nazwa;
    private String opis;
    private String krajPochodzenia;
    private Double zawartoscCukru;
    private Double kwasowosc;
}
