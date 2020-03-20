package com.sendmeout.SendMeOut.Dao;

import com.sendmeout.SendMeOut.Entity.UserEntity;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

@Repository
public class UserDao {

    private final EntityManager entityManager;

    public UserDao (EntityManager entityManager){
        this.entityManager = entityManager;
    }

    @Transactional
    public void createOrUpdateUser(UserEntity userEntity){
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(userEntity);
    }

    @Transactional
    public UserEntity getUserByUsername (String username) {
        Session session = entityManager.unwrap(Session.class);
        return session.get(UserEntity.class, username);

    }

}
