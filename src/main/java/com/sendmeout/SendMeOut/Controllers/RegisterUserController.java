package com.sendmeout.SendMeOut.Controllers;

import com.sendmeout.SendMeOut.Dto.UserDto;
import com.sendmeout.SendMeOut.Service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/reg")
@RestController
public class RegisterUserController {

    private UserService userService;

    public RegisterUserController (UserService userService){
        this.userService = userService;
    }

    @PostMapping("/create-new-user")
    public void createNewUser (@RequestBody UserDto userDto) {
        userService.addOrUpdateUser(userDto);
    }
}
