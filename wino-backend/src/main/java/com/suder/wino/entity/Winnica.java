package com.suder.wino.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "winnice")
public class Winnica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nazwa")
    private String nazwa;
    @Column(name = "adres")
    private String adres;
    @Column(name = "powierzchnia_uprawna")
    private Double powierzchniaUprawna;
    @Column(name = "rodzaj_winorosli")
    private String rodzajWinorosli;
    @Column(name = "rok_zalozenia")
    private Integer rokZalozenia;
}
