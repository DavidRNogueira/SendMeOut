package com.sendmeout.SendMeOut.Dto;

public class UserDto {

    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String gender;
    private String organization;
    private String addressOne;
    private String addressTwo;
    private String city;
    private String state;
    private String country;
    private String title;
    private String id ;
    private String dateJoined;
    private long phone;
    private int zip;

   public UserDto(){}

    public UserDto(String username,
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
                   long phone,
                   int zip,
                   String id){
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

    //Constructor for setting info at login
    public UserDto(String username,
                   String firstName,
                   String lastName,
                   String email,
                   String organization,
                   String addressOne,
                   String addressTwo,
                   String city,
                   String state,
                   String country,
                   String title,
                   long phone,
                   int zip,
                   String id) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.organization = organization;
        this.addressOne = addressOne;
        this.addressTwo = addressTwo;
        this.city = city;
        this.state = state;
        this.country = country;
        this.title = title;
        this.phone = phone;
        this.zip = zip;
        this.id = id;
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

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDateJoined() {
        return dateJoined;
    }

    public void setDateJoined(String dateJoined) {
        this.dateJoined = dateJoined;
    }

    public long getPhone() {
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



}
