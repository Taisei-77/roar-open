package com.example.roar.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;

import lombok.Data;

@Entity // JPAのエンティティであることを示す。DBで使用するオブジェクトをエンティティ。フィールド=カラム。
@Data
@Table(name = "users_info")
public class User {
    @Id // 主キーを示す
    @Column(nullable = false)
    private String uid; // uid
    private String user_name; // ユーザー名
    private String icon; // アイコン
    private String profile; // プロフィール
    private String activ; // 活動
    private String likes; // 趣味
    private String sns; // SNS
    private String gallery; // ギャラリー
}