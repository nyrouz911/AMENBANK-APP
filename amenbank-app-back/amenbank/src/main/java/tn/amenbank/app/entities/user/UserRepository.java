package tn.amenbank.app.entities.user;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.amenbank.app.entities.user.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String> {
    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);

}
