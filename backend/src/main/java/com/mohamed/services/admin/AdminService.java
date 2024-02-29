package com.mohamed.services.admin;

import com.mohamed.dto.BookDto;
import com.mohamed.dto.CarDto;
import com.mohamed.dto.CarListDto;
import com.mohamed.dto.SearchDto;

import java.io.IOException;
import java.util.List;

public interface AdminService {

    boolean addCar(CarDto carDto) throws IOException;

    List<CarDto> getAllCars();

    void deleteCar(Long id);

    CarDto getCarById(Long id);

    boolean updateCar(Long carId, CarDto carDto) throws IOException;

    List<BookDto> getBookings();

    boolean changeBookingStatus(Long bookingId, String status);

    CarListDto searchCar(SearchDto searchDto);

}
