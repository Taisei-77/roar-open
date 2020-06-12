package com.example.roar.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;

//コントローラーアノテーションでviewを返せる
@Controller
public class HeloController {
    // リクエストマッピング(条件)で条件一致すれば通る
    @RequestMapping(value = "/")
    public String index(Model model) {
        model.addAttribute("message", "Hello Springboot");
        return "index";
    }

    /*
     * // 長いから不採用
     *
     * @RequestMapping("/test") public ModelAndView test(ModelAndView mav) {
     * mav.addObject("message", "Hello Springboot"); mav.setViewName("index");
     * return mav; }
     */

    @RequestMapping("/aaa")
    public String aaa() {
        return "second";
    }

    @PostMapping("/aaa")
    // @RequestMapping(value = "/aaa" ,method = RequestMethod.POST)
    public String aaaPost(Model model, @RequestParam("name") String name) {
        model.addAttribute("message", "ようこそ" + name);
        return "second";
    }

}