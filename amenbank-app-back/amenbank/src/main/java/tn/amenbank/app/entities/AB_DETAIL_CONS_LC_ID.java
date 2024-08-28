package tn.amenbank.app.entities;

import java.io.Serializable;
import java.util.Objects;

public class AB_DETAIL_CONS_LC_ID implements Serializable {
    private Long glob_cons_lc;
    private Long num;

    // Default constructor
    public AB_DETAIL_CONS_LC_ID() {}

    // Getters and Setters
    public Long getGlob_cons_lc() {
        return glob_cons_lc;
    }

    public void setGlob_cons_lc(Long glob_cons_lc) {
        this.glob_cons_lc = glob_cons_lc;
    }

    public Long getNum() {
        return num;
    }

    public void setNum(Long num) {
        this.num = num;
    }

    // Override equals and hashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AB_DETAIL_CONS_LC_ID that = (AB_DETAIL_CONS_LC_ID) o;
        return Objects.equals(glob_cons_lc, that.glob_cons_lc) &&
                Objects.equals(num, that.num);
    }

    @Override
    public int hashCode() {
        return Objects.hash(glob_cons_lc, num);
    }
}
