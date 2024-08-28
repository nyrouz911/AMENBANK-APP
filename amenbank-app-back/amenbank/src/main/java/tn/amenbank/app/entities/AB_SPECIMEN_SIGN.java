package tn.amenbank.app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AB_SPECIMEN_SIGN {

    @Id
    private String ribTire;
    private byte[] specimenSign;

    /*
    RIB_TIRE       VARCHAR2(20 BYTE),
  SPECIMEN_SIGN     BLOB
     */
}
