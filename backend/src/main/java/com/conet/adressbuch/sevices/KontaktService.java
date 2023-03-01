package com.conet.adressbuch.sevices;

import com.conet.adressbuch.repository.KontaktRepository;
import com.conet.adressbuch.models.Kontakt;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class KontaktService {

    //@SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection") // wegen AutowiredFehler
    @Autowired
    private KontaktRepository kontaktRepository;
    public List<Kontakt> getKontakte() {
        return kontaktRepository.findAll();
    }


    public Kontakt getKontakt(int kontaktId) {
        Optional<Kontakt> byId = kontaktRepository.findById(kontaktId);
        if (byId.isEmpty()) {
            throw new EntityNotFoundException();
        }
        return byId.get();
    }

    public void createKontakt(Kontakt kontakt) {
        kontaktRepository.save(kontakt);
    }


    public void updateKontakt(int kontaktId, Kontakt kontaktinfo) {
        Kontakt kontakt = getKontakt(kontaktId);

        kontakt.setNachname(kontaktinfo.getNachname());
        kontakt.setVorname(kontaktinfo.getVorname());
        kontakt.setAnrede(kontaktinfo.getAnrede());
        kontakt.setTelefon(kontaktinfo.getTelefon());
        kontakt.setAdresse(kontaktinfo.getAdresse());

        kontaktRepository.save(kontakt);
    }

    public void deleteKontakt(int kontaktId) {
    kontaktRepository.delete(getKontakt(kontaktId));
    }

}
