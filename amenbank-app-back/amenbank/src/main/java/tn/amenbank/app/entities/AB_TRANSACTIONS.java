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
@Table(name = "AB_TRANSACTIONS")
public class AB_TRANSACTIONS {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long code_transaction; // Change to Long to use GenerationType.IDENTITY

    @ManyToOne
    @JoinColumn(name = "module_code_module", referencedColumnName = "code_module")
    private AB_MODULES module;

    private String lib;
    private int tri;
}
