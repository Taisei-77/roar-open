package com.example.roar.controller;

// import java.util.List;

//import com.example.roar.entity.User;
//import com.example.roar.entity.UserRepository;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
// import org.springframework.ui.Model;
// import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;

//コントローラーアノテーションでviewを返せる
@Controller
public class HeloController {
    // リクエストマッピング(条件)で条件一致すれば通る
    @RequestMapping(value = "/test")
    public String index() {
        // model.addAttribute("message", "Hello Springboot");
        return "index";
    }

    /*
     * 長いから不採用
     *
     *
     * @RequestMapping("/test") public ModelAndView test(ModelAndView mav) {
     * mav.addObject("message", "Hello Springboot"); mav.setViewName("index");
     * return mav; }
     */

    // @RequestMapping("/aaa")
    // public String aaa() {
    // return "third";
    // }

    // @PostMapping("/aaa")
    // // @RequestMapping(value = "/aaa" ,method = RequestMethod.POST)
    // public String aaaPost(Model model, @RequestParam("name") String name) {
    // model.addAttribute("message", "ようこそ" + name);
    // return "second";
    // }

    // @Autowired
    // TweetService tweetService;
    // UserRepository userRepository;

    // @RequestMapping("/forth")
    // public String user(Model model) {
    // List<User> userlist = userRepository.findAll();
    // model.addAttribute("userlist", userlist);
    // return "forth";
    // }

    // @RequestMapping("/forth")
    // public String user(Model model) {
    // List<User> userlist = tweetService.getTweet();
    // model.addAttribute("userlist", userlist);
    // return "forth";
    // }

}