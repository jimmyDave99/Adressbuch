package com.conet.adressbuch.sevices;

import com.conet.adressbuch.models.Kontakt;

import java.util.List;

public interface IKontaktService {

    public List<Kontakt> getKontakte();
    public Kontakt getKontakt(int kontaktId);
    public void createKontakt(Kontakt kontakt);
    public void updateKontakt(int kontaktId,Kontakt kontakt);
    public void deleteKontakt(int kontaktId);
}
