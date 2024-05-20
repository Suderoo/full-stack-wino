package com.suder.wino.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


@Entity
@Table(name = "pracownicy")
public class Pracownik {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "imie")
    private String imie;
    @Column(name = "nazwisko")
    private String nazwisko;
    @Column(name = "email_id", nullable = false, unique = true)
    private String email;
    @Column(name = "numer_telefonu")
    private String numerTelefonu;
    @Column(name = "stanowisko")
    private String stanowisko;
    @Column(name = "wynagrodzenie")
    private double wynagrodzenie;
    @JoinColumn(name = "winnica_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Winnica winnica;

    public Pracownik(Long id, String lokalizacja, Double temperatura, Double wilgotnosc, Integer pojemnosc, Long winoId, Integer iloscButelek) {
    }
}
