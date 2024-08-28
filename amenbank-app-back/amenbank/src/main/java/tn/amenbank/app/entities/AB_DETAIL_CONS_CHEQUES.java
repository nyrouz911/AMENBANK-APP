package tn.amenbank.app.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "AB_DETAIL_CONS_CHEQUES", uniqueConstraints = {@UniqueConstraint(columnNames = {"id_chq", "num"})})
@IdClass(ABDetailConsChequesId.class)
public class AB_DETAIL_CONS_CHEQUES implements Serializable {

    @Id
    @ManyToOne
    @JoinColumn(name = "id_chq", referencedColumnName = "idChq") // Correct the referenced column name
    private AB_GLOB_CONS_CHEQUES cheque;

    @Id
    @Column(name = "num")
    private Long num;

    @Lob
    @Column(name = "chq")
    private byte[] chq;

    @Column(name = "nbrLig")
    private int nbrLig;
}
