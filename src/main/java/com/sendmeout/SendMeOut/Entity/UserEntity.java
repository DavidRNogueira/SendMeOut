package com.sendmeout.SendMeOut.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;;


@Entity
@Table(name="user")
public class UserEntity {

    public UserEntity (){}

    public UserEntity(  String username,
                        String password,
                        String firstName,
                        String lastName,
                        String email,
                        String gender,
                        String organization,
                        String addressOne,
                        String addressTwo,
                        String city,
                        String state,
                        String country,
                        String title,
                        int phone,
                        int zip,
                        String id,
                        String dateJoined ){
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.organization = organization;
        this.addressOne = addressOne;
        this.addressTwo = addressTwo;
        this.city = city;
        this.state = state;
        this.country = country;
        this.title = title;
        this.phone = phone;
        this.zip = zip;
    }

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    @Column(name="firstname")
    private String firstName;

    @Column(name="lastname")
    private String lastName;

    @Column(name="email")
    private String email;

    @Column(name="gender")
    private String gender;

    @Column(name="organization")
    private String organization;

    @Column(name="addressone")
    private String addressOne;

    @Column(name="addresstwo")
    private String addressTwo;

    @Column(name="city")
    private String city;

    @Column(name="state")
    private String state;

    @Column(name="country")
    private String country;

    @Column(name="title")
    private String title;

    @Column(name="phone")
    private int phone;

    @Column(name="zip")
    private int zip;

    @Id
    @Column(name="id")
    private String id;

    @Column(name="date_joined")
    private String dateJoined;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public String getAddressOne() {
        return addressOne;
    }

    public void setAddressOne(String addressOne) {
        this.addressOne = addressOne;
    }

    public String getAddressTwo() {
        return addressTwo;
    }

    public void setAddressTwo(String addressTwo) {
        this.addressTwo = addressTwo;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public int getZip() {
        return zip;
    }

    public void setZip(int zip) {
        this.zip = zip;
    }

}