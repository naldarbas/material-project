package com.example.materialproject.service;

import com.example.materialproject.model.Material;
import com.example.materialproject.model.User;
import com.example.materialproject.repo.UserRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public List<User> getUsers(){
        return  userRepo.findAll();
    }
    public void addUser(User user) {
//        String hashedPassword=new BCryptPasswordEncoder().encode(user.getPassword());
//        user.setPassword(hashedPassword);
        System.out.println("***********"+user.getState());
        if(user.getState().equals("deleted"))
        {
            System.out.println("you are blocked");
        }
        user.setState("active");
        userRepo.save(user);
    }

    public Optional<User> getUserById(Long id ) {
        return userRepo.findById(id);
    }
    public User updateUser(User user){
            return userRepo.save(user);
    }

    public void deleteUserById(String id){
        Long longId=Long.parseLong(id);
        User user= userRepo.findById(longId).orElse(null);
        user.setState("deleted");
        userRepo.save(user);
    }



}
