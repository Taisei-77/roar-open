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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

//json(API)受信時に動く
@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class Rest {
    @Autowired
    UserService userService;

    @GetMapping("/users")
    public List<User> getAllData() {
        return userService.getAll();
    }

    // @PathParamで/rest/{keyword}? ⇒パスパラメータ{keyword}を取得
    // @RequestParamで/rest?keyword=Java&limit=10 ⇒クエリパラメータJava,10を取得
    @PostMapping("/login")
    public String getAll() {
        // System.out.println("address=" + address + ", password=" + password);
        return "OK";
    }

    @Autowired
    SearchService searchService;

    @GetMapping("/Search")
    public List<Search> getAllA() {
        // System.out.println("address=" + address + ", password=" + password);
        return searchService.getAll();
    }

    // post送信パターン
    // axios
    // .post("http://localhost:8080/api/login", {
    // email: login_email,
    // password: login_pass,
    // })
    // .then((res) => {
    // //レスポンスを受け取るオブジェクトをresとする
    // // 通信成功後
    // console.log(res);
    // })
    // .catch((error) => {
    // // 通信失敗
    // console.log(error);
    // });

    // GET受信パターン
    // @GetMapping("/login")
    // public String getAll(@RequestParam("address") String address,
    // @RequestParam("password") String password) {
    // System.out.println("address=" + address + ", password=" + password);
    // return "OK";
    // }
}