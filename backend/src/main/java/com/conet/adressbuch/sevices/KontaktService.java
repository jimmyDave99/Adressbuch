package com.conet.adressbuch.sevices;

import com.conet.adressbuch.models.User;
import com.conet.adressbuch.repository.KontaktRepository;
import com.conet.adressbuch.models.Kontakt;
import com.conet.adressbuch.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class KontaktService {

    @Autowired
    private KontaktRepository kontaktRepository;
    private UserRepository userRepository;
//    private UserService userService;
    @Autowired
    private User user ;
    public List<Kontakt> getKontakte() {
        return kontaktRepository.findAll();
    }

    public List<Kontakt> getKontaktefilter(String userId) {
        user = userRepository.findByUserId(userId);
        if (user.getRole().equals("ADMIN")){
            return getKontakte();
        }else {
            List<Kontakt> filteredList = new ArrayList<>();
            List<Kontakt> allkontakt = kontaktRepository.findAll();
            System.out.println(user.getUserId());
            for (Kontakt kontakt : allkontakt) {
                if (kontakt.getUserId().equals(userId)) {
                    filteredList.add(kontakt);
                    // break;
                }
            }
            return filteredList;
        }
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
