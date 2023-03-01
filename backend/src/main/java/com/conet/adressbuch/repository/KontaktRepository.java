package com.conet.adressbuch.repository;

import com.conet.adressbuch.models.Kontakt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KontaktRepository extends JpaRepository<Kontakt,Integer> {

}
