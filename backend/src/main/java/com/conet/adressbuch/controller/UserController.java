package com.conet.adressbuch.controller;

import com.conet.adressbuch.hashing.PasswordHashing;
import com.conet.adressbuch.models.Kontakt;
import com.conet.adressbuch.models.User;
import com.conet.adressbuch.repository.UserRepository;
import com.conet.adressbuch.sevices.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository repository;

    private final PasswordHashing passwordHashing = new PasswordHashing();

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getUsers();
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User userData) {

        Optional<User> byId = repository.findById(userData.getUserId());

        if (byId.isPresent()) {
            User user = byId.get();
            if (user.getPassword().equals(passwordHashing.doHasching(userData.getPassword()))) {
                return ResponseEntity.ok(user);
            }
        }

        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }

    @PostMapping("/register")
    public String createUser(@RequestBody User user){

        userService.createUser(user);
        return "successful created";
    }
    @GetMapping("/{id}")
    public User getUser(@PathVariable(value = "id") String userId){
        return userService.getUser(userId);
    }

    @PutMapping("/users/{id}")
    public String updateUser(@PathVariable(value = "id") String userId, @RequestBody User newUser){
        userService.updateUser(userId,newUser);
        return "successful updated";
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable(value = "id") String userId){
        userService.deleteUser(userId);

        return "successful deleted";
    }
}