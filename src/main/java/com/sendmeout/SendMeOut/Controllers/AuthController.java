package com.sendmeout.SendMeOut.Controllers;

import com.sendmeout.SendMeOut.Dto.LoginDto;
import com.sendmeout.SendMeOut.Dto.UserDto;
import com.sendmeout.SendMeOut.Service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserService userService;
    private HttpServletResponse servletResponse;

    public AuthController (UserService userService , HttpServletResponse servletResponse){
        this.userService = userService;
        this.servletResponse = servletResponse;
    }

    @PostMapping("/login")
    public void handleLogin (@RequestBody LoginDto loginDto){
        UserDto userInfo = userService.handleLogin(loginDto.getUsername(), loginDto.getPassword());

        if (userInfo == null){
            return;
        }

        userService.addCookieToBrowser(servletResponse, userInfo.getId());
    }
}
