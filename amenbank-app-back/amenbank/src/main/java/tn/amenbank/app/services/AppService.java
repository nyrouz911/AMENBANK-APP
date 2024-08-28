package tn.amenbank.app.services;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tn.amenbank.app.entities.*;
import tn.amenbank.app.entities.user.User;
import tn.amenbank.app.entities.user.UserRepository;
import tn.amenbank.app.repositories.*;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class AppService implements IAppService {
    @Autowired
    AB_GLOB_CONS_CHEQUES_Repository ab_glob_cons_cheques_repository;
    AB_DETAIL_CONS_CHEQUES_Repository   ab_detail_cons_cheques_repository;

    AB_DETAIL_CONS_LC_Repository    ab_detail_cons_lc_repository;
    @Autowired
    AB_SPECIMEN_SIGN_Repository     ab_specimen_sign_repository;
    @Autowired
    AB_GLOB_CONS_LC_Repository ab_glob_cons_lc_repository;
    @Autowired
    AB_MODULES_Repository ab_modules_repository;
    @Autowired
    AB_TRANSACTIONS_Repository ab_transactions_repository;

    private UserRepository userRepository;

    //----------ADD FUNCTIONS----------------

    //--------LOGIN-----------------
    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AppService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public User registerUser(User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new RuntimeException("Username is already taken");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public User loginUser(String username, String password) {
        Optional<User> userOpt = userRepository.findByUsername(username);

        if (userOpt.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User user = userOpt.get();

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }

    //---------END LOGIN-------------

    @Override
    public AB_GLOB_CONS_CHEQUES add_AB_GLOB_CONS_CHEQUES(AB_GLOB_CONS_CHEQUES ab_glob_cons_cheques){
        return ab_glob_cons_cheques_repository.save(ab_glob_cons_cheques);
    }

    @Override
    public AB_DETAIL_CONS_CHEQUES add_AB_DETAIL_CONS_CHEQUES(AB_DETAIL_CONS_CHEQUES ab_detail_cons_cheques) {
        return ab_detail_cons_cheques_repository.save(ab_detail_cons_cheques);
    }

    @Override
    public AB_DETAIL_CONS_LC addAB_DETAIL_CONS_LC(AB_DETAIL_CONS_LC entity) {
        return ab_detail_cons_lc_repository.save(entity);
    }

    @Override
    public AB_GLOB_CONS_LC addAB_GLOB_CONS_LC(AB_GLOB_CONS_LC entity) {
        return ab_glob_cons_lc_repository.save(entity);
    }

    @Override
    public AB_SPECIMEN_SIGN addAB_SPECIMEN_SIGN(AB_SPECIMEN_SIGN entity) {
        return ab_specimen_sign_repository.save(entity);
    }

    @Override
    public AB_MODULES addAB_MODULES(AB_MODULES entity) {
        return ab_modules_repository.save(entity);
    }

    @Override
    public AB_TRANSACTIONS addAB_TRANSACTIONS(AB_TRANSACTIONS entity) {
        return ab_transactions_repository.save(entity);
    }

    //----------DELETE FUNCTIONS------------

    @Override
    public void remove_AB_GLOB_CONS_CHEQUES(AB_GLOB_CONS_CHEQUES ab_glob_cons_cheques){
        ab_glob_cons_cheques_repository.delete(ab_glob_cons_cheques);
    }

    @Override
    public void remove_AB_DETAIL_CONS_CHEQUES(AB_DETAIL_CONS_CHEQUES ab_detail_cons_cheques) {
        ab_detail_cons_cheques_repository.delete(ab_detail_cons_cheques);
    }

    @Override
    public void removeAB_DETAIL_CONS_LC(AB_DETAIL_CONS_LC entity) {
        ab_detail_cons_lc_repository.delete(entity);
    }

    @Override
    public void removeAB_GLOB_CONS_LC(AB_GLOB_CONS_LC entity) {
        ab_glob_cons_lc_repository.delete(entity);
    }

    @Override
    public void removeAB_SPECIMEN_SIGN(AB_SPECIMEN_SIGN entity) {
        ab_specimen_sign_repository.delete(entity);
    }

    @Override
    public void removeAB_MODULES(AB_MODULES entity) {
            ab_modules_repository.delete(entity);
    }

    @Override
    public void removeAB_TRANSACTIONS(AB_TRANSACTIONS entity) {
        ab_transactions_repository.delete(entity);
    }

    //-----------AFFICHAGE------------//
    public List<AB_GLOB_CONS_CHEQUES> list_AB_GLOB_CONS_CHEQUES(){
        return ab_glob_cons_cheques_repository.findAll();
    }

    public List<AB_DETAIL_CONS_CHEQUES> list_AB_DETAIL_CONS_CHEQUES() {
        return ab_detail_cons_cheques_repository.findAll();
    }

    public List<AB_DETAIL_CONS_LC> list_AB_DETAIL_CONS_LC() {
        return ab_detail_cons_lc_repository.findAll();
    }

    public List<AB_GLOB_CONS_LC> list_AB_GLOB_CONS_LC() {
        return ab_glob_cons_lc_repository.findAll();
    }

    public List<AB_MODULES> list_AB_MODULES() {
        return ab_modules_repository.findAll();
    }

    public List<AB_SPECIMEN_SIGN> list_AB_SPECIMEN_SIGN() {
        return ab_specimen_sign_repository.findAll();
    }

    public List<AB_TRANSACTIONS> list_AB_TRANSACTIONS() {
        return ab_transactions_repository.findAll();
    }

    @Scheduled(fixedDelay = 60000)
    void scheduler() {
        log.info("test");
    }
}
