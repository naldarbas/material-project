package com.example.materialproject.service;

import com.example.materialproject.exception.MaterialNotFoundException;
import com.example.materialproject.model.Material;
import com.example.materialproject.repo.MaterialRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MaterialService {

    private MaterialRepo materialRepo;
    @Autowired
    public MaterialService(MaterialRepo materialRepo) {
        this.materialRepo = materialRepo;
    }


    public Material addMaterial(Material material) {
        return materialRepo.save(material);
    }

    public List<Material> findAllMaterial() {
        return materialRepo.findAll();
    }


    public Optional<Material> getMaterial(Long id ) {
        return materialRepo.findById(id);

    }
    public Material findMaterialByTitle(String title){
        return materialRepo.findMaterialByTitle(title).orElseThrow(()-> new MaterialNotFoundException ("Title "+ title +"Not Found"));
    }
}
