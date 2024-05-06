package com.suder.wino.mapper;

import com.suder.wino.dto.OdmianaDto;
import com.suder.wino.entity.Odmiana;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface OdmianaMapper {

    OdmianaDto mapToOdmianaDTO(Odmiana odmiana);

    Odmiana mapToOdmiana(OdmianaDto odmianaDTO);

    @Mapping(target = "id", ignore = true)
    void updateOdmianaFromDTO(OdmianaDto odmianaDTO, @MappingTarget Odmiana odmiana);
}
