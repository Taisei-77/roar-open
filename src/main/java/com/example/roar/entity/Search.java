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
@Table(name = "search_info")
public class Search {
    @Id // 主キーを示す
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String team_name; // チーム名
    private String picture; // チーム写真
    private String sport_name; // 競技名
    private String prefectures; // 活動地域
    private String activity_frequency; // 活動頻度
    private String day_of_the_week; // 活動曜日
    private String team_concept; // チームコンセプト
}