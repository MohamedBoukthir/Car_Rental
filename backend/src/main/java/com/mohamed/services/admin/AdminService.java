package com.mohamed.services.admin;

import com.mohamed.dto.CarDto;

import java.io.IOException;
import java.util.List;

public interface AdminService {

    boolean addCar(CarDto carDto) throws IOException;

    List<CarDto> getAllCars();

}
