package com.sendmeout.SendMeOut;

import com.sendmeout.SendMeOut.Bean.UserDetailsBean;
import com.sendmeout.SendMeOut.Dao.UserDao;
import com.sendmeout.SendMeOut.Dto.UserDto;
import com.sendmeout.SendMeOut.Entity.UserEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserDao userDao;

    public UserService (UserDao userDao){
        this.userDao = userDao;
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
        userDao.createOrUpdateUser(userEntity);
    }
}
