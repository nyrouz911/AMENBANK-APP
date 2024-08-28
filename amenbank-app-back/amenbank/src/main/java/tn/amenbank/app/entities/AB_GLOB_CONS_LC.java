package tn.amenbank.app.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(
        name = "AB_GLOB_CONS_LC",
        uniqueConstraints = @UniqueConstraint(columnNames = {"date_journee", "code_agence", "num_lot", "num_ligne"})
)
public class AB_GLOB_CONS_LC {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_LDC")
    private Long idLdc;

    @Column(name = "DATE_JOURNEE")
    private String dateJournee;

    @Column(name = "CODE_AGENCE")
    private String codeAgence;

    @Column(name = "NUM_LOT")
    private String numLot;

    @Column(name = "NUM_LIGNE")
    private Long numLigne;

    @Column(name = "CODE_SENS")
    private String codeSens;

    @Column(name = "CODE_VALEUR")
    private String codeValeur;

    @Column(name = "NATURE_REMETTANT")
    private String natureRemettant;

    @Column(name = "CODE_REMETTANT")
    private String codeRemettant;

    @Column(name = "AGENCE_REMETTANTE")
    private String agenceRemettante;

    @Column(name = "DATE_OPERATION")
    private String dateOperation;

    @Column(name = "NUMERO_LOT")
    private String numeroLot;

    @Column(name = "CODE_ENREGISTREMENT")
    private String codeEnregistrement;

    @Column(name = "CODE_DEVISE")
    private String codeDevise;

    @Column(name = "CODE_RANG")
    private String codeRang;

    @Column(name = "MONTANT")
    private Double montant;

    @Column(name = "MONTANT_INTERET")
    private Double montantInteret;

    @Column(name = "NUMERO_LC")
    private String numeroLc;

    @Column(name = "RIB_TIRE")
    private String ribTire;

    @Column(name = "CODE_INSTITUTION")
    private String codeInstitution;

    @Column(name = "AGENCE_DESTINATAIRE")
    private String agenceDestinataire;

    @Column(name = "RIB_CEDANT")
    private String ribCedant;

    @Column(name = "RAISON_SOCIAL")
    private String raisonSocial;

    @Column(name = "NOM_TIRE")
    private String nomTire;

    @Column(name = "REFERENCE_TIRE")
    private String referenceTire;

    @Column(name = "CODE_ACCEPTATION")
    private String codeAcceptation;

    @Column(name = "CODE_ENDOSSEMENT")
    private String codeEndossement;

    @Column(name = "DATE_ECHEANCE")
    private String dateEcheance;

    @Column(name = "DATE_CREATION")
    private String dateCreation;

    @Column(name = "REFERENCE_CEDANT")
    private String referenceCedant;

    @Column(name = "ORDRE_PAYE")
    private String ordrePaye;

    @Column(name = "SITUATION_CEDANT")
    private String situationCedant;

    @Column(name = "NATURE_COMPTE")
    private String natureCompte;

    @Column(name = "DATE_COMPENSATION")
    private String dateCompensation;

    @Column(name = "MOTIF_REJET")
    private String motifRejet;

    @Column(name = "DATEJOURNEE")
    private String datejournee;

    @Column(name = "CODE_TRANSM_AGENCE")
    private String codeTransmAgence;

    @Column(name = "DATE_TRANSM_AGENCE")
    private String dateTransmAgence;

    @Column(name = "SUSPEND")
    private String suspend;

    @Column(name = "CODE_SUSPEND")
    private String codeSuspend;

    @Column(name = "RIB_TIRE_INITIAL")
    private String ribTireInitial;

    @Column(name = "DATE_ECHEANCE_INITIAL")
    private String dateEcheanceInitial;

    @Column(name = "LIEU_CREATION")
    private String lieuCreation;

    @Column(name = "CODE_RISQUE")
    private String codeRisque;

    @Column(name = "MONTANT_PROTET")
    private Double montantProtet;
}
