package com.example.roar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.roar.entity.User;
import com.example.roar.entity.UserRepository;

//データベースの操作ロジック
@Service
@Transactional
public class UserService {
    @Autowired
    UserRepository userRepository;

    public void setProfile(User profileData) {
        User user = new User();
        user.setUid(profileData.getUid());
        // user.setUser_name(profileData.getUser_name());
        user.setIcon(profileData.getIcon());
        user.setProfile(profileData.getProfile());
        user.setActiv(profileData.getActiv());
        user.setLikes(profileData.getLikes());
        user.setSns(profileData.getSns());
        user.setGallery(profileData.getGallery());
        userRepository.save(user);
    }

    public User getProfile(String uid) {
        return userRepository.findByUidIs(uid);
    }
}