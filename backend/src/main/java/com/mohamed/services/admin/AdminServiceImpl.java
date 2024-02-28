package com.mohamed.services.admin;

import com.mohamed.dto.BookDto;
import com.mohamed.dto.CarDto;
import com.mohamed.entities.Book;
import com.mohamed.entities.Car;
import com.mohamed.repositories.BookRepository;
import com.mohamed.repositories.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final CarRepository carRepository;
    private final BookRepository bookRepository;

    @Override
    public boolean addCar(CarDto carDto) throws IOException {
        try {
            Car car = new Car();
            car.setName(carDto.getName());
            car.setBrand(carDto.getBrand());
            car.setColor(carDto.getColor());
            car.setPrice(carDto.getPrice());
            car.setYear(carDto.getYear());
            car.setType(carDto.getType());
            car.setDescription(carDto.getDescription());
            car.setTransmission(carDto.getTransmission());
            car.setImage(carDto.getImage().getBytes());
            carRepository.save(car);
            return true;
        } catch (Exception exception) {
            return false;
        }
    }

    @Override
    public List<CarDto> getAllCars() {
        return carRepository.findAll().stream().map(Car::getCarDto).collect(Collectors.toList());
    }

    @Override
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }

    @Override
    public CarDto getCarById(Long id) {
        Optional<Car> optionalCar = carRepository.findById(id);
        return optionalCar.map(Car::getCarDto).orElse(null);
    }

    @Override
    public boolean updateCar(Long carId, CarDto carDto) throws IOException {
        Optional<Car> optionalCar = carRepository.findById(carId);
        if (optionalCar.isPresent()) {
            Car existedCar = optionalCar.get();
            if (carDto.getImage() != null)
                existedCar.setImage(carDto.getImage().getBytes());
            existedCar.setPrice(carDto.getPrice());
            existedCar.setYear(carDto.getYear());
            existedCar.setColor(carDto.getColor());
            existedCar.setTransmission(carDto.getTransmission());
            existedCar.setType(carDto.getType());
            existedCar.setDescription(carDto.getDescription());
            existedCar.setName(carDto.getName());
            existedCar.setBrand(carDto.getBrand());
            carRepository.save(existedCar);
            return true;
        }else {
            return false;
        }
    }

    @Override
    public List<BookDto> getBookings() {
        return bookRepository.findAll().stream().map(Book::getBookCarDto).collect(Collectors.toList());
    }
}
