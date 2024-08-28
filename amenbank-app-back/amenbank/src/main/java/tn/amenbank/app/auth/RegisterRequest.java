package tn.amenbank.app.auth;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import tn.amenbank.app.entities.user.Role;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String firstname;
    private String lastname;
    private String username;
    private String email;
    private String password;
    private Role role;
    private boolean mfaEnabled;
}