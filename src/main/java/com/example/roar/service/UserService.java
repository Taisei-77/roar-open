package com.example.roar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

// import java.util.List;

import com.example.roar.entity.User;
import com.example.roar.entity.UserRepository;

//データベースの操作メソッドをここで作成
@Service
@Transactional
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User postTweet(User tweet) {
        return userRepository.save(tweet);
    }

    public User getUserInfo(String uid) {
        return userRepository.findByUidIs(uid);
    }
}