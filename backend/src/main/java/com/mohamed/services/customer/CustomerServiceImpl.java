package com.mohamed.services.customer;

import com.mohamed.dto.BookDto;
import com.mohamed.dto.CarDto;
import com.mohamed.entities.Book;
import com.mohamed.entities.Car;
import com.mohamed.entities.User;
import com.mohamed.enums.BookingStatus;
import com.mohamed.repositories.BookRepository;
import com.mohamed.repositories.CarRepository;
import com.mohamed.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CarRepository carRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    @Override
    public List<CarDto> getAllCars() {
        return carRepository.findAll().stream().map(Car::getCarDto).collect(Collectors.toList());
    }

    @Override
    public boolean bookCar(BookDto bookDto) {
        Optional<Car> optionalCar = carRepository.findById(bookDto.getCarId());
        Optional<User> optionalUser = userRepository.findById(bookDto.getUserId());

        if (optionalCar.isPresent() && optionalUser.isPresent()) {
            Car existingCar = optionalCar.get();
            Book book = new Book();
            book.setUser(optionalUser.get());
            book.setCar(existingCar);
            book.setBookingStatus(BookingStatus.PENDING);
            long diffInMilliSeconds = bookDto.getToDate().getTime() - bookDto.getFromDate().getTime();
            long days = TimeUnit.MICROSECONDS.toDays(diffInMilliSeconds);
            book.setDays(days);
            book.setPrice(existingCar.getPrice() * days);
            bookRepository.save(book);
            return true;
        }
        return false;
    }

    @Override
    public CarDto getCarById(Long carId) {
        Optional<Car> optionalCar = carRepository.findById(carId);
        return optionalCar.map(Car::getCarDto).orElse(null);
    }
}
