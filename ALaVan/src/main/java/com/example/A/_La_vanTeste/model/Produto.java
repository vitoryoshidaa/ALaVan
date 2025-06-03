package com.example.A._La_vanTeste.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name="TB_PRODUTO")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Basic(optional = false)
    @Column(name="ID_PRODUTO")
    private UUID id;

    @Column(name="NOME")
    private String nome;

    @Column(name="DESCRICAO")
    private String descricao;

    @Column(name="IMAGEM")
    private String imagem;

    @ManyToOne
    @JoinColumn(name="CATEGORIA_ID")
    private Categoria categoria;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
