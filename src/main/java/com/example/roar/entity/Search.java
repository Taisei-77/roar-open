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
@Table(name = "search_info")
public class Search {
    @Id // 主キーを示す
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String teamName; // チーム名
    @Column(nullable = true)
    private String picture; // チーム写真
    @Column(nullable = true)
    private String sportName; // 競技名
    @Column(nullable = true)
    private String prefectures; // 活動地域
    @Column(nullable = true)
    private String activityFrequency; // 活動頻度
    @Column(nullable = true)
    private String dayOfTheWeek; // 活動曜日
    @Column(nullable = true)
    private String teamConcept; // チームコンセプト
}