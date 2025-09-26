package com.vendas360.vendas_backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vendas360.vendas_backend.dtos.SellerResponse;
import com.vendas360.vendas_backend.models.Seller;
import com.vendas360.vendas_backend.repositories.SellerRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class SellerService {
    
    @Autowired
    SellerRepository sellerRepository;

    public Seller getById(long id) {
        return sellerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Seller not found"));
    }

    public List<SellerResponse> getAll() {
        return sellerRepository.findAll()
                .stream().map(s -> s.toDTO())
                .toList();                               
    }

    public Seller save(Seller seller) {
        return sellerRepository.save(seller);
    }

    public Seller update(long id, Seller newSeller) {
        Seller seller = sellerRepository.getReferenceById(id);

        seller.setName(newSeller.getName());
        seller.setSalary(newSeller.getSalary());
        seller.setBonus(newSeller.getBonus());
        seller.setGender(newSeller.getGender());

        return sellerRepository.save(seller);
    }

    public void deleteById(long id) {
        sellerRepository.deleteById(id);
    }
}
