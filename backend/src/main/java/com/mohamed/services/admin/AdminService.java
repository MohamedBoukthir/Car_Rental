package com.mohamed.services.admin;

import com.mohamed.dto.CarDto;

import java.io.IOException;

public interface AdminService {

    boolean addCar(CarDto carDto) throws IOException;

}
