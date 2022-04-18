package com.example.materialproject.model;

import org.hibernate.validator.constraints.Length;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

//1- show as a page
//2- username and email are unique
//3- new user's password is the same as their username
//
//full name: text (required  + max 50 + min 2 + only accepts arabic letters and spaces)
//username:text (required + unique + max 15 + min 2 + only accepts english letters and '.-_')
//email:text (required + unique + max 150 + min 4 + only accepts english letters and the pattern 'lettersORcharacters@letters.letters')
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true,nullable = false)
    @NotEmpty(message = "Username is required")
    @Length(min = 2,max = 50,message = "FullName must be between 2 and 50 length range")
    @Pattern(regexp = "^[\\u0621-\\u064A0-9 ]+$",message = "Only accepts arabic letter ")
    private String fullname;
    @Column(unique = true,nullable = false)
    @NotEmpty(message = "Username is required")
    @Length(min = 2,max = 15,message = "UserName must be between 2 and 15 length range")
    @Pattern(regexp="^[a-zA-Z0-9-_\\.]+$")
    private String username;

    private String password;
    @Column(unique = true,nullable = false)
    @Length(min = 4,max = 150,message = "Email must be between 4 and 150 length range")
    @Email
    private String email;
    private String state;

    public User() {
    }

    public User(Long id, String fullname, String username, String password, String email,String state) {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.email = email;
        this.state =state;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
