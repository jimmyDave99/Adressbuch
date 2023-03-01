package com.conet.adressbuch.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "kontakt")
@Entity
public class Kontakt {
    @Id
    @GeneratedValue
    private int id;
    private String nachname;
    private String vorname;
    private String anrede;
    private int telefon;
    private String adresse;
    private String userId;

    public Kontakt() {

    }
    public Kontakt(int id, String nachname, String vorname, String anrede, int telefon, String adresse) {
        this.id = id;
        this.nachname = nachname;
        this.vorname = vorname;
        this.anrede = anrede;
        this.telefon = telefon;
        this.adresse = adresse;
    }

    public Kontakt(String nachname, String vorname, String anrede, int telefon, String adresse) {
        this.nachname = nachname;
        this.vorname = vorname;
        this.anrede = anrede;
        this.telefon = telefon;
        this.adresse = adresse;
    }

    public void setId(int id) {
        this.id = id;
    }
    public int getId() {
        return id;
    }
    public String getNachname() {
        return nachname;
    }
    public void setNachname(String nachname) {
        this.nachname = nachname;
    }
    public String getVorname() {
        return vorname;
    }
    public void setVorname(String vorname) {
        this.vorname = vorname;
    }
    public String getAnrede() {
        return anrede;
    }
    public void setAnrede(String anrede) {
        this.anrede = anrede;
    }
    public int getTelefon() {
        return telefon;
    }
    public void setTelefon(int telefon) {
        this.telefon = telefon;
    }
    public String getAdresse() {
        return adresse;
    }
    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Kontakt{" +
                "nachname='" + nachname + '\'' +
                ", vorname='" + vorname + '\'' +
                ", anrede='" + anrede + '\'' +
                ", telefon=" + telefon +
                ", adresse='" + adresse + '\'' +
                ", id=" + id +
                '}';
    }
}
