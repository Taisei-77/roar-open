package com.example.roar.controller;

import java.util.List;

import com.example.roar.entity.Search;
import com.example.roar.entity.User;
import com.example.roar.service.SearchService;
import com.example.roar.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//json(API)受信時に動く
@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class Rest {
    @Autowired
    UserService userService;

    @PostMapping("/user")
    public User user(@RequestBody User uidData) {
        // System.out.println(uidData.getUid());
        return userService.getProfile(uidData.getUid());
    }

    @PostMapping("/profile")
    public void profile(@RequestBody User profileData) {
        userService.setProfile(profileData);
    }

    @Autowired
    SearchService searchService;

    @GetMapping("/search")
    public List<Search> getAllA() {
        return searchService.getAll();
    }

    // @PathParamで/rest/{keyword}? ⇒パスパラメータ{keyword}を取得
    // @RequestParamで/rest?keyword=Java&limit=10 ⇒クエリパラメータJava,10を取得
    // GET受信パターン
    // @GetMapping("/login")
    // public String getAll(@RequestParam("address") String address,
    // @RequestParam("password") String password) {
    // System.out.println("address=" + address + ", password=" + password);
    // return "OK";
    // }
}