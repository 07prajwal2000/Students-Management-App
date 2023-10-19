package com.bharathkalyans.precize.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(indexes = @Index(name = "score_index", columnList = "sat_score"))
public class Student {

    @Id
    @SequenceGenerator(name = "student_sequence_generator", sequenceName = "student_sequence_generator", initialValue = 10, allocationSize = 1)
    @GeneratedValue(generator = "student_sequence_generator", strategy = GenerationType.AUTO)
    long id;
    @NotBlank
    String name;
    @NotBlank
    String address;
    @NotBlank
    String city;
    @NotBlank
    String country;
    @NotNull
    int pincode;
    @NotNull
    int sat_score;

    boolean isPassed;

    public Student() {
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getPincode() {
        return pincode;
    }

    public void setPincode(int pincode) {
        this.pincode = pincode;
    }

    public int getSat_score() {
        return sat_score;
    }

    public void setSat_score(int sat_score) {
        this.sat_score = sat_score;
    }

    public boolean isPassed() {
        return isPassed;
    }

    public void setPassed(boolean passed) {
        isPassed = passed;
    }
}
