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
@Table(name = "AB_MODULES")
public class AB_MODULES {

    @Id
    @Column(length = 6)
    private String code_module;

    @Column(length = 50)
    private String lib;

    @Column(length = 3)
    private String code_schema_db;

    @Column(nullable = false)
    private int fournisseur = 0;

    private int tri;

    @Lob
    private String img_b64;
}
