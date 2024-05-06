package com.suder.wino.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MagazynDto {
    private Long id;
    private String lokalizacja;
    private Double temperatura;
    private Double wilgotnosc;
    private Integer pojemnosc;
    private Long winoId;
    private Integer iloscButelek;
}
