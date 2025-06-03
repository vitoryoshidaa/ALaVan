package com.example.A._La_vanTeste.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name="TB_CATEGORIA")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Basic(optional = false)
    @Column(name="ID_CATEGORIA")
    private UUID id;

    @Column(name="NOME")
    private String nome;

    @Column(name="DESCRICAO")
    private String descricao;

    @Column(name="TEXTODESCRITIVO")
    private String textoDescricao;


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
    public String getTextoDescricao() {
        return textoDescricao;
    }
    public void setTextoDescricao(String textoDescricao) {
        this.textoDescricao = textoDescricao;
    }
}
