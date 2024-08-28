package tn.amenbank.app.entities;

import java.io.Serializable;
import java.util.Objects;

public class ABDetailConsChequesId implements Serializable {
    private Long cheque; // Corresponding to ID_CHQ in AB_GLOB_CONS_CHEQUES
    private Long num;

    public ABDetailConsChequesId() {}

    public ABDetailConsChequesId(Long cheque, Long num) {
        this.cheque = cheque;
        this.num = num;
    }

    // Getters and setters
    public Long getCheque() {
        return cheque;
    }

    public void setCheque(Long cheque) {
        this.cheque = cheque;
    }

    public Long getNum() {
        return num;
    }

    public void setNum(Long num) {
        this.num = num;
    }

    // hashCode and equals
    @Override
    public int hashCode() {
        return Objects.hash(cheque, num);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        ABDetailConsChequesId that = (ABDetailConsChequesId) obj;
        return Objects.equals(cheque, that.cheque) &&
                Objects.equals(num, that.num);
    }
}
