package com.sendmeout.SendMeOut.Service;

import com.sendmeout.SendMeOut.Dao.UserDao;
import com.sendmeout.SendMeOut.Dto.ContextDto;
import com.sendmeout.SendMeOut.Dto.LoginDto;
import com.sendmeout.SendMeOut.Dto.UserDto;
import com.sendmeout.SendMeOut.Entity.UserEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Service
public class UserService {

    private final UserDao userDao;
    private HttpServletResponse response;

    public UserService (UserDao userDao , HttpServletResponse response){
        this.userDao = userDao;
        this.response = response;

    }

    public void addOrUpdateUser (UserDto userDto) {
        UserEntity userEntity = new UserEntity(
                userDto.getUsername(),
                userDto.getPassword(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getEmail(),
                userDto.getGender(),
                userDto.getOrganization(),
                userDto.getAddressOne(),
                userDto.getAddressTwo(),
                userDto.getCity(),
                userDto.getState(),
                userDto.getCountry(),
                userDto.getTitle(),
                userDto.getPhone(),
                userDto.getZip(),
                userDto.getId(),
                userDto.getDateJoined());
        userEntity.setId(UUID.randomUUID().toString());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM-MM-YYYY");
        LocalDate currentDate = LocalDate.now();
        userEntity.setDateJoined(currentDate.format(formatter));

        userDao.createOrUpdateUser(userEntity);
    }

    public ContextDto handleLogin (String username, String password){
        UserEntity user = userDao.getUserByUsername(username);

        if (!doesPasswordMatch(password, user.getPassword())){
            return null;
        }

        ContextDto contextDto = new ContextDto(user.getUsername(), user.getFirstName(), user.getLastName(), user.getId());

        return contextDto;
    }

    public boolean doesPasswordMatch (String passAttempt, String passInDb){
        Boolean passwordsMatch = new BCryptPasswordEncoder().matches(passAttempt, passInDb);
        return passwordsMatch;
    }

    public void addCookieToBrowser (HttpServletResponse response, String id){
        Cookie cookie = new Cookie("SendMeOutCookie", id);
        response.addCookie(cookie);
    }

}
