package com.suder.wino.repository;

import com.suder.wino.entity.Odmiana;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OdmianaRepository extends JpaRepository<Odmiana, Long> {
}
