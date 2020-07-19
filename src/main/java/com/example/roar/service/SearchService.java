package com.example.roar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import com.example.roar.entity.Search;
import com.example.roar.entity.SearchRepository;

//データベースの操作メソッドをここで作成
@Service
@Transactional
public class SearchService {
    @Autowired
    SearchRepository searchRepository;

    public List<Search> findTeam(Search search) {
        return searchRepository.findTeamSQL(search.getSportName(), search.getPrefectures(),
                search.getActivityFrequency(), search.getDayOfTheWeek());
    }
}