package com.conet.adressbuch.controller;

import com.conet.adressbuch.models.Kontakt;
import com.conet.adressbuch.sevices.KontaktService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class KontaktController {

    private final KontaktService kontaktService;

    @Autowired
    public KontaktController(KontaktService kontaktService){
        this.kontaktService = kontaktService;
    }

    @GetMapping("/kontakte")
    public List<Kontakt> getKontakte(){
        return kontaktService.getKontakte();
    }

    @GetMapping("/kontakte/filter")
    public List<Kontakt> getKontakteFilter(@RequestParam(name = "userId", required = true) String userId){
        return kontaktService.getKontaktefilter(userId);
    }

    @GetMapping("/kontakte/{id}")
    public Kontakt getKontake(@PathVariable(value = "id") int kontaktId){
        return kontaktService.getKontakt(kontaktId);
    }

    @PostMapping("/kontakte")
    public String createKontakt(@RequestBody Kontakt kontakt){
        kontaktService.createKontakt(kontakt);
        return "successful created";
    }

    @PutMapping("/kontakte/{id}")
    public String updateKontakt(@PathVariable(value = "id") int kontaktId, @RequestBody Kontakt kontaktinfo){
        kontaktService.updateKontakt(kontaktId,kontaktinfo);
        return "successful updated";
    }

    @DeleteMapping("/kontakte/{id}")
    public String deleteKontakt(@PathVariable(value = "id") int kontaktId){
        kontaktService.deleteKontakt(kontaktId);

        return "successful deleted";
    }

}
