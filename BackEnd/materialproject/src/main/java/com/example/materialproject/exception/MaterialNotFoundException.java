package com.example.materialproject.exception;

public class MaterialNotFoundException extends  RuntimeException{
    public MaterialNotFoundException(String message) {
        super(message);
    }
}
