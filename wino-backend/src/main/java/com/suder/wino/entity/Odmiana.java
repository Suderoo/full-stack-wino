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
@Table(name = "odmiany")
public class Odmiana {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nazwa")
    private String nazwa;
    @Column(name = "opis")
    private String opis;
    @Column(name = "kraj_pochodzenia")
    private String krajPochodzenia;
    @Column(name = "zawartosc_cukru")
    private Double zawartoscCukru;
    @Column(name = "kwasowosc")
    private Double kwasowosc;
}
