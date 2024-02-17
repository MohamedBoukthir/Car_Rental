package com.mohamed.services.authentication;

import com.mohamed.dto.RegisterRequest;
import com.mohamed.dto.UserDto;

public interface AuthenticationService {

    UserDto createCustomer(RegisterRequest registerRequest);
    boolean hasCustomerWithEmail(String email);

}
