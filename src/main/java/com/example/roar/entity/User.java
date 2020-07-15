package com.example.roar.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;

import lombok.Data;

@Entity // JPAのエンティティであることを示す。DBで使用するオブジェクトをエンティティ。フィールド=カラム。
@Data
@Table(name = "users_info")
public class User {
    @Id // 主キーを示す
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String uid;
    @Column(nullable = false)
    private String user_name;
    @Column(nullable = false)
    private String icon;
    @Column(nullable = false)
    private String profile;
    @Column(nullable = false)
    private String activ;
    @Column(nullable = false)
    private String likes;
    @Column(nullable = false)
    private String sns;
    @Column(nullable = false)
    private String gallery;
}