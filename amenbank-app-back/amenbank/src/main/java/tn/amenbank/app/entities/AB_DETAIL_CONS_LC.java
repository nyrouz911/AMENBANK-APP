package tn.amenbank.app.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@IdClass(AB_DETAIL_CONS_LC_ID.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AB_DETAIL_CONS_LC {

    @Id
    @OneToOne
    @JoinColumn(name = "glob_cons_lc")
    private AB_GLOB_CONS_LC glob_cons_lc;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long num;

    private byte[] ldc;
    private int nbrLig;
}
