package com.mohamed.controllers;

import com.mohamed.dto.RegisterRequest;
import com.mohamed.dto.UserDto;
import com.mohamed.services.authentication.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @RequestMapping("/register")
    public ResponseEntity<?> registerCustomer(@RequestBody RegisterRequest registerRequest){
        if (authenticationService.hasCustomerWithEmail(registerRequest.getEmail()))
            return new ResponseEntity<>("This Email Already Exist !",HttpStatus.NOT_ACCEPTABLE);
        UserDto createdCustomerDto = authenticationService.createCustomer(registerRequest);
        if (createdCustomerDto == null)
            return new ResponseEntity<>("Customer Not Created, Try Again.", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(createdCustomerDto, HttpStatus.CREATED);
    }

}
