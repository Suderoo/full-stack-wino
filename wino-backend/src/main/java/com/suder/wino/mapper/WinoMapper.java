package com.suder.wino.mapper;

import com.suder.wino.dto.WinoDto;
import com.suder.wino.entity.Wino;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface WinoMapper {
    WinoDto mapToWinoDTO(Wino wino);
    Wino mapToWino(WinoDto winoDTO);

    @Mapping(target = "id", ignore = true) // Ignorujemy aktualizację pola 'id'
    void updateWinoFromDTO(WinoDto winoDTO, @MappingTarget Wino wino);
}
