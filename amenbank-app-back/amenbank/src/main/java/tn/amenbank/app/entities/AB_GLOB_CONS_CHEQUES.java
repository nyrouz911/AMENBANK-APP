package tn.amenbank.app.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = {"date_journee", "code_agence", "num_lot", "num_ligne"})})
public class AB_GLOB_CONS_CHEQUES {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idChq") // Ensure this matches the column name in the database
    private Long idChq;

    @Temporal(TemporalType.DATE)
    @Column(name = "date_journee")
    private Date dateJournee; // unique

    @Column(name = "code_agence")
    private String codeAgence; // unique

    @Column(name = "num_lot")
    private String numLot; // unique

    @Column(name = "num_ligne")
    private int numLigne; // unique

    @Column(name = "rib_tire")
    private String ribTire;

    @Column(name = "nom_tire")
    private String nomTire;

    @Column(name = "num_creance")
    private String numCreance;

    @Temporal(TemporalType.DATE)
    @Column(name = "date_emission")
    private Date dateEmission;

    @Column(name = "montant")
    private float montant;
}
