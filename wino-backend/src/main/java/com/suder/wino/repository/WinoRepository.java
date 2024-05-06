package com.suder.wino.repository;

import com.suder.wino.entity.Wino;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WinoRepository extends JpaRepository<Wino, Long> {
}
