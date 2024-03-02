package com.mohamed.services.customer;

import com.mohamed.dto.BookDto;
import com.mohamed.dto.CarDto;
import com.mohamed.dto.CarListDto;
import com.mohamed.dto.SearchDto;

import java.util.List;

public interface CustomerService {

    List<CarDto> getAllCars();

    boolean bookCar(BookDto bookDto);

    CarDto getCarById(Long carId);

    List<BookDto> getBookingByUserId(Long userId);

    CarListDto searchCar(SearchDto searchDto);

}
