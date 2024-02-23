package com.mohamed.entities;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String color;
    private String name;
    private String type;
    private String transmission;
    private String description;
    private Long price;
    private String year;
    @Column(columnDefinition = "longblob")
    private byte[] image;


}
