package com.suder.wino.repository;

import com.suder.wino.entity.Winnica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WinnicaRepository extends JpaRepository<Winnica, Long> {
}
