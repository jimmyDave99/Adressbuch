package com.conet.adressbuch.controller;

import com.conet.adressbuch.config.JWTService;
import com.conet.adressbuch.hashing.PasswordHashing;
import com.conet.adressbuch.models.User;
import com.conet.adressbuch.repository.UserRepository;
import com.conet.adressbuch.sevices.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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
    private JWTService jwtService;


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
                return ResponseEntity.ok(userService.login(user));
            }
        }
        return (ResponseEntity<?>) ResponseEntity.internalServerError();
    }


    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User user) {

        return ResponseEntity.ok(userService.createUser(user));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestBody User user) {

        return ResponseEntity.ok(userService.authenticate(user));
    }

    @GetMapping("/userName")
    public String extractUsername(@RequestHeader HttpHeaders header) {
        String jwt = header.getFirst(HttpHeaders.AUTHORIZATION);
        System.out.println(header);
        if (jwt != null && jwt.startsWith("Bearer ")) {
            String token = jwt.replace("Bearer ", "");
            return jwtService.extractUsername(token);
        }
        return "";
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable(value = "id") String userId) {
        return userService.getUser(userId);
    }

    @PutMapping("/users/{id}")
    public String updateUser(@PathVariable(value = "id") String userId, @RequestBody User newUser) {
        userService.updateUser(userId, newUser);
        return "successful updated";
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable(value = "id") String userId) {
        userService.deleteUser(userId);

        return "successful deleted";
    }
}