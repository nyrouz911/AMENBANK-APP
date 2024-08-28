package tn.amenbank.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.amenbank.app.entities.AB_TRANSACTIONS;

public interface AB_TRANSACTIONS_Repository extends JpaRepository<AB_TRANSACTIONS,String> {
}
