package tn.amenbank.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.amenbank.app.entities.AB_DETAIL_CONS_CHEQUES;
import tn.amenbank.app.entities.AB_SPECIMEN_SIGN;

public interface AB_DETAIL_CONS_CHEQUES_Repository extends JpaRepository<AB_DETAIL_CONS_CHEQUES, Long> {
}
