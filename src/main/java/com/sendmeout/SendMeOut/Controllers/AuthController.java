package com.sendmeout.SendMeOut.Controllers;

import com.sendmeout.SendMeOut.Dto.UserDto;
import com.sendmeout.SendMeOut.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserService userService;

    public AuthController (UserService userService){
        this.userService = userService;
    }

    @PostMapping("/create-new-user")
    public void createNewUser (@RequestBody UserDto userDto) {
        userService.addOrUpdateUser(userDto);
    }
}
