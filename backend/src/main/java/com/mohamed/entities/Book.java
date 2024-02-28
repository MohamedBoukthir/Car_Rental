package com.mohamed.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mohamed.dto.BookDto;
import com.mohamed.enums.BookingStatus;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date fromDate;
    private Date toDate;
    private Long days;
    private Long price;
    private BookingStatus bookingStatus;

    @ManyToOne(fetch =  FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;

    @ManyToOne(fetch =  FetchType.LAZY, optional = false)
    @JoinColumn(name = "car_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Car car;

    public BookDto getBookCarDto() {
        BookDto bookDto = new BookDto();
        bookDto.setId(id);
        bookDto.setDays(days);
        bookDto.setBookingStatus(bookingStatus);
        bookDto.setPrice(price);
        bookDto.setToDate(toDate);
        bookDto.setFromDate(fromDate);
        bookDto.setEmail(user.getEmail());
        bookDto.setUsername(user.getName());
        bookDto.setUserId(user.getId());
        bookDto.setCarId(car.getId());
        return bookDto;
    }

}
