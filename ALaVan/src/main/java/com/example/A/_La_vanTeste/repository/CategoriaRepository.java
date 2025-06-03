package com.example.A._La_vanTeste.repository;

import com.example.A._La_vanTeste.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface CategoriaRepository extends JpaRepository<Categoria, UUID> {

}
