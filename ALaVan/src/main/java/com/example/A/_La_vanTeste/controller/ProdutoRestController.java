package com.example.A._La_vanTeste.controller;

import com.example.A._La_vanTeste.model.Categoria;
import com.example.A._La_vanTeste.model.Produto;
import com.example.A._La_vanTeste.repository.CategoriaRepository;
import com.example.A._La_vanTeste.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoRestController {
    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    @GetMapping
    public List<Produto> listarProdutos() {
        return produtoRepository.findAll();
    }
    @GetMapping("/categoria/{id}")
    public List<Produto> listarCategorias(@PathVariable UUID id) {
        return produtoRepository.findByCategoriaId(id);
    }
    @GetMapping("/categoria/{id}/info")
    public ResponseEntity<Categoria> buscarCategoriaPorId(@PathVariable UUID id) {
        return categoriaRepository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}
