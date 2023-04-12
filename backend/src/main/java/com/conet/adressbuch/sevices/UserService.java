package com.conet.adressbuch.sevices;

import com.conet.adressbuch.config.AuthenticationResponse;
import com.conet.adressbuch.config.JWTService;
import com.conet.adressbuch.hashing.PasswordHashing;
import com.conet.adressbuch.models.User;
import com.conet.adressbuch.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private PasswordHashing passwordHashing;

    private final JWTService jwtService;

    private AuthenticationManager authenticationManager;

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User getUser(String userId){
        Optional <User> byId = userRepository.findById(userId);
        if (byId.isEmpty()){
            throw new EntityNotFoundException();
        }
        return byId.get();
    }

    public AuthenticationResponse login(User user){
        user.setPassword(passwordHashing.doHasching(user.getPassword()));
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public AuthenticationResponse createUser(User user){
        user.setPassword(passwordHashing.doHasching(user.getPassword()));
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }
    public AuthenticationResponse authenticate(User user){
        user.setPassword(passwordHashing.doHasching(user.getPassword()));
        authenticationManager.authenticate(  // prüft ob UserId und Password korrekt sind
                new UsernamePasswordAuthenticationToken(
                        user.getUserId(),
                        user.getPassword()
                )
        );
        var user_ = userRepository.findByUserId(user.getUserId());
        var jwtToken = jwtService.generateToken(user_);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

    public void updateUser(String userId, User newUser ){
        User user = getUser(userId);

        user.setPassword(newUser.getPassword());

        userRepository.save(user);
    }
    public void deleteUser(String userId){
        userRepository.delete(getUser(userId));
    }
}
