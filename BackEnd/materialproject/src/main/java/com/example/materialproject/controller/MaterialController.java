package com.example.materialproject.controller;

import com.example.materialproject.model.Material;
import com.example.materialproject.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import static java.lang.Integer.parseInt;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/material")
public class MaterialController {
    private ArrayList<Material> materialArrayList = new ArrayList<>();
    private MaterialService materialService;


    @Autowired
    public MaterialController(MaterialService materialService) {
        this.materialService = materialService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Material>> getAllMaterial(){
        List<Material> materials=materialService.findAllMaterial();
        return new ResponseEntity<>(materials, HttpStatus.OK);
    }

    @PostMapping("/post")
    public ResponseEntity<Material> addMaterial(@RequestBody Material material){
        System.out.println(getFileExtension(material.getAttachments()));
        //get the extension from the method then Test if the Extension pdf or png ..
        if(  getFileExtension(material.getAttachments()).equals("pdf") || getFileExtension(material.getAttachments()).equals("png")){
            Material materials= materialService.addMaterial(material);
            return new ResponseEntity<>(materials,HttpStatus.OK);
        }
        return null;
     }

     @GetMapping("/search/{title}")
     public ResponseEntity<Material> getMaterialByTitle(@PathVariable("title") String title){
        Material materiall=materialService.findMaterialByTitle(title);
           return new ResponseEntity<>(materiall,HttpStatus.OK);
       }

     @GetMapping(path = "/list/{id}")
     public Optional<Material> getMaterialByTitle(@PathVariable Long id){
        return materialService.getMaterial(id);
      }

      //Method to Find the File Extension
      private static String getFileExtension(String fileName ) {
        if (fileName.lastIndexOf('.') != -1 && fileName.lastIndexOf('.') != 0) {
            return fileName.substring(fileName.lastIndexOf('.') + 1);
        } else {
            return "File don't have extension";
        }
    }

}
