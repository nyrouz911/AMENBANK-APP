package tn.amenbank.app.controllers;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.amenbank.app.entities.*;
import tn.amenbank.app.entities.user.User;
import tn.amenbank.app.services.IAppService;

import java.util.List;


@RestController
@AllArgsConstructor
@RequestMapping("/amenbank")
@CrossOrigin(origins = "http://localhost:4200")  // Update with your Angular app's URL
public class AppController {

    IAppService appService;
/*
    // http://localhost:8089/app/amenbank/add-etudiant
    @PostMapping("/add-etudiant")
    @ResponseBody
    public Etudiant addEtudiant(@RequestBody Etudiant e) {
        Etudiant etudiant= appService.addEtudiant(e);
        return etudiant;
    }
*/
// http://localhost:8089/app/amenbank/user/register
@PostMapping("/user/register")
public ResponseEntity<User> registerUser(@RequestBody User user) {
    User registeredUser = appService.registerUser(user);
    return ResponseEntity.ok(registeredUser);
}

    // http://localhost:8089/app/amenbank/user/login
    @PostMapping("/user/login")
    public ResponseEntity<User> loginUser(@RequestBody User loginRequest) {
        User user = appService.loginUser(loginRequest.getUsername(), loginRequest.getPassword());
        return ResponseEntity.ok(user);
    }

    // http://localhost:8089/app/amenbank/ab_glob_cons_cheques
    @PostMapping("/ab_glob_cons_cheques")
    public AB_GLOB_CONS_CHEQUES addAB_GLOB_CONS_CHEQUES(@RequestBody AB_GLOB_CONS_CHEQUES ab_glob_cons_cheques) {
        return appService.add_AB_GLOB_CONS_CHEQUES(ab_glob_cons_cheques);
    }
    // http://localhost:8089/app/amenbank/ab_detail_cons_cheques
    @PostMapping("/ab_detail_cons_cheques")
    public AB_DETAIL_CONS_CHEQUES addAB_DETAIL_CONS_CHEQUES(@RequestBody AB_DETAIL_CONS_CHEQUES ab_detail_cons_cheques) {
        return appService.add_AB_DETAIL_CONS_CHEQUES(ab_detail_cons_cheques);
    }
    // http://localhost:8089/app/amenbank/ab_detail_cons_lc
    @PostMapping("/ab_detail_cons_lc")
    public AB_DETAIL_CONS_LC addAB_DETAIL_CONS_LC(@RequestBody AB_DETAIL_CONS_LC ab_detail_cons_lc) {
        return appService.addAB_DETAIL_CONS_LC(ab_detail_cons_lc);
    }
    // http://localhost:8089/app/amenbank/ab_glob_cons_lc
    @PostMapping("/ab_glob_cons_lc")
    public AB_GLOB_CONS_LC addAB_GLOB_CONS_LC(@RequestBody AB_GLOB_CONS_LC ab_glob_cons_lc) {
        return appService.addAB_GLOB_CONS_LC(ab_glob_cons_lc);
    }
    // http://localhost:8089/app/amenbank/ab_specimen_sign
    @PostMapping("/ab_specimen_sign")
    public AB_SPECIMEN_SIGN addAB_SPECIMEN_SIGN(@RequestBody AB_SPECIMEN_SIGN ab_specimen_sign) {
        return appService.addAB_SPECIMEN_SIGN(ab_specimen_sign);
    }
    // http://localhost:8089/app/amenbank/ab_modules
    @PostMapping("/ab_modules")
    public AB_MODULES addAB_MODULES(@RequestBody AB_MODULES ab_modules) {
        return appService.addAB_MODULES(ab_modules);
    }
    // http://localhost:8089/app/amenbank/ab_transactions
    @PostMapping("/ab_transactions")
    public AB_TRANSACTIONS addAB_TRANSACTIONS(@RequestBody AB_TRANSACTIONS ab_transactions) {
        return appService.addAB_TRANSACTIONS(ab_transactions);
    }

    //----------DELETE FUNCTIONS------------
    // http://localhost:8089/app/amenbank/ab_glob_cons_cheques
    @DeleteMapping("/ab_glob_cons_cheques")
    public void removeAB_GLOB_CONS_CHEQUES(@RequestBody AB_GLOB_CONS_CHEQUES ab_glob_cons_cheques) {
        appService.remove_AB_GLOB_CONS_CHEQUES(ab_glob_cons_cheques);
    }
    // http://localhost:8089/app/amenbank/ab_detail_cons_cheques
    @DeleteMapping("/ab_detail_cons_cheques")
    public void removeAB_DETAIL_CONS_CHEQUES(@RequestBody AB_DETAIL_CONS_CHEQUES ab_detail_cons_cheques) {
        appService.remove_AB_DETAIL_CONS_CHEQUES(ab_detail_cons_cheques);
    }
    // http://localhost:8089/app/amenbank/ab_detail_cons_lc
    @DeleteMapping("/ab_detail_cons_lc")
    public void removeAB_DETAIL_CONS_LC(@RequestBody AB_DETAIL_CONS_LC ab_detail_cons_lc) {
        appService.removeAB_DETAIL_CONS_LC(ab_detail_cons_lc);
    }
    // http://localhost:8089/app/amenbank/ab_glob_cons_lc
    @DeleteMapping("/ab_glob_cons_lc")
    public void removeAB_GLOB_CONS_LC(@RequestBody AB_GLOB_CONS_LC ab_glob_cons_lc) {
        appService.removeAB_GLOB_CONS_LC(ab_glob_cons_lc);
    }
    // http://localhost:8089/app/amenbank/ab_specimen_sign
    @DeleteMapping("/ab_specimen_sign")
    public void removeAB_SPECIMEN_SIGN(@RequestBody AB_SPECIMEN_SIGN ab_specimen_sign) {
        appService.removeAB_SPECIMEN_SIGN(ab_specimen_sign);
    }
    // http://localhost:8089/app/amenbank/ab_modules
    @DeleteMapping("/ab_modules")
    public void removeAB_MODULES(@RequestBody AB_MODULES ab_modules) {
        appService.removeAB_MODULES(ab_modules);
    }
    // http://localhost:8089/app/amenbank/ab_transactions
    @DeleteMapping("/ab_transactions")
    public void removeAB_TRANSACTIONS(@RequestBody AB_TRANSACTIONS ab_transactions) {
        appService.removeAB_TRANSACTIONS(ab_transactions);
    }

    // affichage

    // http://localhost:8089/app/amenbank/ab_glob_cons_cheques/list
    @GetMapping("/ab_glob_cons_cheques/list")
    public List<AB_GLOB_CONS_CHEQUES> listAB_GLOB_CONS_CHEQUES() {
        return appService.list_AB_GLOB_CONS_CHEQUES();
    }
    // http://localhost:8089/app/amenbank/ab_detail_cons_cheques/list
    @GetMapping("/ab_detail_cons_cheques/list")
    public List<AB_DETAIL_CONS_CHEQUES> listAB_DETAIL_CONS_CHEQUES() {
        return appService.list_AB_DETAIL_CONS_CHEQUES();
    }
    // http://localhost:8089/app/amenbank/ab_detail_cons_lc/list
    @GetMapping("/ab_detail_cons_lc/list")
    public List<AB_DETAIL_CONS_LC> listAB_DETAIL_CONS_LC() {
        return appService.list_AB_DETAIL_CONS_LC();
    }
    // http://localhost:8089/app/amenbank/ab_glob_cons_lc/list
    @GetMapping("/ab_glob_cons_lc/list")
    public List<AB_GLOB_CONS_LC> listAB_GLOB_CONS_LC() {
        return appService.list_AB_GLOB_CONS_LC();
    }
    // http://localhost:8089/app/amenbank/ab_modules/list
    @GetMapping("/ab_modules/list")
    public List<AB_MODULES> listAB_MODULES() {
        return appService.list_AB_MODULES();
    }
    // http://localhost:8089/app/amenbank/ab_specimen_sign/list
    @GetMapping("/ab_specimen_sign/list")
    public List<AB_SPECIMEN_SIGN> listAB_SPECIMEN_SIGN() {
        return appService.list_AB_SPECIMEN_SIGN();
    }
    // http://localhost:8089/app/amenbank/ab_transactions/list
    @GetMapping("/ab_transactions/list")
    public List<AB_TRANSACTIONS> listAB_TRANSACTIONS() {
        return appService.list_AB_TRANSACTIONS();
    }
}
