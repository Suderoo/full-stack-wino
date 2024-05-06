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
@Table(name = "wina")
public class Wino {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nazwa")
    private String nazwa;
    @Column(name = "rocznik")
    private Integer rocznik;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "odmiana_id")
    private Odmiana odmiana;
    @Column(name = "zawartosc_alkoholu")
    private Double zawartoscAlkoholu;
    @Column(name = "poziom_slodyczy")
    private String poziomSlodyczy;
    @Column(name = "cena")
    private Double cena;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "winnica_id")
    private Winnica winnica;
}
