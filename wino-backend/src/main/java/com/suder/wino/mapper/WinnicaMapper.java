package com.suder.wino.mapper;

import com.suder.wino.dto.WinnicaDto;
import com.suder.wino.entity.Winnica;
import org.springframework.stereotype.Component;

@Component
public class WinnicaMapper {

    public Winnica mapToWinnica(WinnicaDto winnicaDTO) {
        Winnica winnica = new Winnica();
        winnica.setId(winnicaDTO.getId());
        winnica.setNazwa(winnicaDTO.getNazwa());
        winnica.setAdres(winnicaDTO.getAdres());
        winnica.setPowierzchniaUprawna(winnicaDTO.getPowierzchniaUprawna());
        winnica.setRodzajWinorosli(winnicaDTO.getRodzajWinorosli());
        winnica.setRokZalozenia(winnicaDTO.getRokZalozenia());
        return winnica;
    }

    public WinnicaDto mapToWinnicaDTO(Winnica winnica) {
        WinnicaDto winnicaDTO = new WinnicaDto();
        winnicaDTO.setId(winnica.getId());
        winnicaDTO.setNazwa(winnica.getNazwa());
        winnicaDTO.setAdres(winnica.getAdres());
        winnicaDTO.setPowierzchniaUprawna(winnica.getPowierzchniaUprawna());
        winnicaDTO.setRodzajWinorosli(winnica.getRodzajWinorosli());
        winnicaDTO.setRokZalozenia(winnica.getRokZalozenia());
        return winnicaDTO;
    }
}
