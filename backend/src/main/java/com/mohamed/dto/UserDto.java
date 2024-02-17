package com.mohamed.dto;

import com.mohamed.enums.UserRole;
import lombok.Data;

@Data
public class UserDto {

    private Long id;
    private String name;
    private String email;
    private UserRole userRole;

}
