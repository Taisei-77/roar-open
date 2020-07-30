package com.example.roar.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

//エンティティ(クラス名)と主キー(ID)の型を指定
//「JpaRepository」にはCRUD操作の為の基本的なメソッドが定義されている
public interface SearchRepository extends JpaRepository<Search, Long> {

    // 「:引数名」でSQL内で使用できる。
    @Query(value = "SELECT * FROM search_info AS s WHERE ( length(:sportName) = 0 OR s.sport_name = :sportName) AND ( length(:prefectures) = 0 OR s.prefectures = :prefectures) AND ( length(:activityFrequency) = 0 OR s.activity_frequency = :activityFrequency) AND ( length(:dayOfTheWeek) = 0 OR s.day_of_the_week = :dayOfTheWeek) AND (length(:freeWord) = 0 OR MATCH (s.team_name,s.sport_name,s.prefectures,s.activity_frequency,s.day_of_the_week,s.team_concept) AGAINST (:freeWord IN BOOLEAN MODE)) ORDER BY s.updated_at DESC", nativeQuery = true)
    List<Search> findTeamSQL(String sportName, String prefectures, String activityFrequency, String dayOfTheWeek,
            String freeWord);

}