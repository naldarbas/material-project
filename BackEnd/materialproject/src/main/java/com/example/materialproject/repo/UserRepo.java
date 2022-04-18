package com.example.materialproject.repo;

import com.example.materialproject.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;
@CrossOrigin("http://localhost:4200")
@Repository
public interface UserRepo extends JpaRepository<User,Integer> {

    Optional<User> findById(Long id);

    void deleteById(long parseLong);
}
