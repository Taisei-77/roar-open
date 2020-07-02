package com.example.roar.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;

//import lombok.AllArgsConstructor;
import lombok.Data;
//import lombok.NoArgsConstructor;

@Entity // JPAのエンティティであることを示す。DBで使用するオブジェクトをエンティティ。フィールド=カラム。
@Data
// @NoArgsConstructor //引数を持たないコンストラクタを生成
// @AllArgsConstructor //全ての引数を持つコンストラクタを生成
@Table(name = "user_info")
public class User {
    @Id // 主キーを示す
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String address;
    @Column(nullable = false)
    private String user;
    @Column(nullable = false)
    private String password;
}