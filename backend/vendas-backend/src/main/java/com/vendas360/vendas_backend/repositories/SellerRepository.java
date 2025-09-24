package com.vendas360.vendas_backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vendas360.vendas_backend.models.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {
    
}
