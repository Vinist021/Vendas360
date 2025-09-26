package com.vendas360.vendas_backend.dtos;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class SellerRequest {

    private Long id;

    @NotBlank(message = "Name can not be blank")
    @Size(min = 3, max = 255, message = "Name length must be between 3 and 255 characters")
    private String name;

    @NotNull(message = "Salary can not be null")
    @Min(value = 1200, message = "Salary must be greater than or equal to 1200.00")    
    private Double salary;

    @NotNull(message = "Bonus can not be null")
    private Double bonus;

    @NotNull(message = "Gender can not be blank")
    private Integer gender;

    public SellerRequest() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public Double getBonus() {
        return bonus;
    }

    public void setBonus(Double bonus) {
        this.bonus = bonus;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

}
