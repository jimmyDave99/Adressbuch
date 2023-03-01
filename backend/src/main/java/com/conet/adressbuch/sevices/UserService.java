package com.conet.adressbuch.sevices;

import com.conet.adressbuch.hashing.PasswordHashing;
import com.conet.adressbuch.models.User;
import com.conet.adressbuch.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    @Autowired
    private UserRepository userRepository;

    private PasswordHashing passwordHashing;

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

    public void createUser(User user){
        user.setPassword(passwordHashing.doHasching(user.getPassword()));
        userRepository.save(user);
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
