package tn.amenbank.app.config;



import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;
import static tn.amenbank.app.entities.user.Permission.ADMIN_CREATE;
import static tn.amenbank.app.entities.user.Permission.ADMIN_DELETE;
import static tn.amenbank.app.entities.user.Permission.ADMIN_READ;
import static tn.amenbank.app.entities.user.Permission.ADMIN_UPDATE;
import static tn.amenbank.app.entities.user.Permission.MANAGER_CREATE;
import static tn.amenbank.app.entities.user.Permission.MANAGER_DELETE;
import static tn.amenbank.app.entities.user.Permission.MANAGER_READ;
import static tn.amenbank.app.entities.user.Permission.MANAGER_UPDATE;
import static tn.amenbank.app.entities.user.Role.ADMIN;
import static tn.amenbank.app.entities.user.Role.MANAGER;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf()
                .disable()
                .authorizeHttpRequests()
                // Allow preflight (OPTIONS) requests for all endpoints
                .requestMatchers("/api/v1/auth/**", "/v2/api-docs", "/v3/api-docs/**",
                        "/swagger-resources/**", "/configuration/ui",
                        "/configuration/security", "/swagger-ui/**","/app/amenbank/**",
                        "/webjars/**", "/swagger-ui.html", "/api/v1/management/**")
                .permitAll()
                .requestMatchers("/api/v1/management/**").hasAnyRole(ADMIN.name(), MANAGER.name())
                .requestMatchers(GET, "/api/v1/management/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
                .requestMatchers(POST, "/api/v1/management/**").hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
                .requestMatchers(PUT, "/api/v1/management/**").hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
                .requestMatchers(DELETE, "/api/v1/management/**").hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name())
                //.anyRequest().authenticated()
                .anyRequest().permitAll()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
