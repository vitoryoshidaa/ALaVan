package com.example.A._La_vanTeste.repository;

import com.example.A._La_vanTeste.model.Categoria;
import com.example.A._La_vanTeste.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ProdutoRepository extends JpaRepository<Produto, UUID> {
    List<Produto> findByCategoriaId(UUID id);
}
