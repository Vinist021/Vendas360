package com.vendas360.vendas_backend.models;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "TBL_SELLER")
public class Seller implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name can not be blank")
    @Size(min = 3, max = 255, message = "Name length must be between 3 and 255 characters")
    @Column(name = "NAME", length = 100, nullable = false)
    private String name;


    @NotBlank(message = "Salary can not be blank")
    @Min(value = 1200, message = "Salary must be greater than or equal to 1200.00")    
    @Column(name = "SALARY", nullable = false)
    private Double salary;

    @NotBlank(message = "Bonus can not be blank")
    @Column(name = "BONUS", nullable = false)
    private Double bonus;

    @NotBlank(message = "Gender can not be blank")
    @Column(name = "GENDER", nullable = false)
    private Integer gender;

    public Seller() {
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

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Seller other = (Seller) obj;
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
            return false;
        return true;
    }

}
