package com.example.materialproject.repo;

import com.example.materialproject.model.Material;
import org.hibernate.metamodel.model.convert.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MaterialRepo  extends JpaRepository<Material,Long> {

    Optional<Material> findMaterialByTitle(String title);

    Optional<Object> findMaterialById(Long id);

    Optional<Material> findById(Integer id);
}
