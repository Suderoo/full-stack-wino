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
@Table(name = "magazyny")
public class Magazyn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "lokalizacja")
    private String lokalizacja;
    @Column(name = "temperatura")
    private Double temperatura;
    @Column(name = "wilgotnosc")
    private Double wilgotnosc;
    @Column(name = "pojemnosc")
    private Integer pojemnosc;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "wino_id")
    private Wino wino;
    @Column(name = "ilosc_butelek")
    private Integer iloscButelek;
}
