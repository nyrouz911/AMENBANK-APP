package tn.amenbank.app.services;

import tn.amenbank.app.entities.*;
import tn.amenbank.app.entities.user.User;

import java.util.List;

public interface IAppService {

    User registerUser(User user);
    User loginUser(String username, String password);

    //--------ADD FUNCTIONS-------
    AB_GLOB_CONS_CHEQUES add_AB_GLOB_CONS_CHEQUES(AB_GLOB_CONS_CHEQUES ab_glob_cons_cheques);
    AB_DETAIL_CONS_CHEQUES add_AB_DETAIL_CONS_CHEQUES(AB_DETAIL_CONS_CHEQUES ab_detail_cons_cheques);
    AB_DETAIL_CONS_LC addAB_DETAIL_CONS_LC(AB_DETAIL_CONS_LC entity);
    AB_GLOB_CONS_LC addAB_GLOB_CONS_LC(AB_GLOB_CONS_LC entity);
    AB_SPECIMEN_SIGN addAB_SPECIMEN_SIGN(AB_SPECIMEN_SIGN entity);

    AB_MODULES addAB_MODULES(AB_MODULES entity);

    AB_TRANSACTIONS addAB_TRANSACTIONS(AB_TRANSACTIONS entity);

    //--------DELETE FUNCTIONS-------
    void remove_AB_GLOB_CONS_CHEQUES(AB_GLOB_CONS_CHEQUES ab_glob_cons_cheques);
    void remove_AB_DETAIL_CONS_CHEQUES(AB_DETAIL_CONS_CHEQUES ab_detail_cons_cheques);
    void removeAB_DETAIL_CONS_LC(AB_DETAIL_CONS_LC entity);
    void removeAB_GLOB_CONS_LC(AB_GLOB_CONS_LC entity);
    void removeAB_SPECIMEN_SIGN(AB_SPECIMEN_SIGN entity);
    void removeAB_MODULES(AB_MODULES entity);
    void removeAB_TRANSACTIONS(AB_TRANSACTIONS entity);

    //--------GET FUNCTIONS-------
    public List<AB_GLOB_CONS_CHEQUES> list_AB_GLOB_CONS_CHEQUES();
    List<AB_DETAIL_CONS_CHEQUES> list_AB_DETAIL_CONS_CHEQUES();
    List<AB_DETAIL_CONS_LC> list_AB_DETAIL_CONS_LC();
    List<AB_GLOB_CONS_LC> list_AB_GLOB_CONS_LC();
    List<AB_MODULES> list_AB_MODULES();
    List<AB_SPECIMEN_SIGN> list_AB_SPECIMEN_SIGN();
    List<AB_TRANSACTIONS> list_AB_TRANSACTIONS();

}
