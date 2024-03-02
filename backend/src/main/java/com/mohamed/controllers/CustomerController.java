package com.mohamed.controllers;

import com.mohamed.dto.BookDto;
import com.mohamed.dto.CarDto;
import com.mohamed.dto.SearchDto;
import com.mohamed.services.customer.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/customer")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    // get all cars
    @GetMapping("/cars")
    public ResponseEntity<List<CarDto>> getAllCars(){
        List<CarDto> carDtoList = customerService.getAllCars();
        return ResponseEntity.ok(carDtoList);
    }

    // book a car
    @PostMapping("/car/book")
    public ResponseEntity<Void> carBooking(@RequestBody BookDto bookDto) {
        boolean success = customerService.bookCar(bookDto);
        if (success) return ResponseEntity.status(HttpStatus.CREATED).build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    // get car by id
    @GetMapping("/car/{carId}")
    public ResponseEntity<CarDto> getCarById(@PathVariable Long carId) {
        CarDto carDto = customerService.getCarById(carId);
        if (carDto == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(carDto);
    }

    // get bookings by user Id
    @GetMapping("/car/booking/{userId}")
    public ResponseEntity<List<BookDto>> getBookingByUserId(@PathVariable Long userId){
        return ResponseEntity.ok(customerService.getBookingByUserId(userId));
    }

    // search for car
    @PostMapping("/car/search")
    public ResponseEntity<?> search(@RequestBody SearchDto searchDto) {
        return ResponseEntity.ok(customerService.searchCar(searchDto));
    }

}
