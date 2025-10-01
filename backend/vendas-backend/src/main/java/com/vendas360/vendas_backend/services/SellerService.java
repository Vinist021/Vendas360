package com.vendas360.vendas_backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.vendas360.vendas_backend.dtos.SellerRequest;
import com.vendas360.vendas_backend.dtos.SellerResponse;
import com.vendas360.vendas_backend.models.Seller;
import com.vendas360.vendas_backend.repositories.SellerRepository;
import com.vendas360.vendas_backend.services.exceptions.DatabaseException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class SellerService {
    
    @Autowired
    SellerRepository sellerRepository;

    public SellerResponse getById(long id) {
        return sellerRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Seller not found")).toDTO();
    }

    public List<SellerResponse> getAll() {
        return sellerRepository.findAll()
                .stream().map(s -> s.toDTO())
                .toList();                               
    }

    public SellerResponse save(SellerRequest sellerRequest) {
        Seller seller = sellerRepository.save(sellerRequest.toEntity());
        return seller.toDTO();
    }

    public SellerResponse update(long id, SellerRequest sellerRequest) {
        Seller seller = sellerRepository.getReferenceById(id);

        seller.setName(sellerRequest.getName());
        seller.setSalary(sellerRequest.getSalary());
        seller.setBonus(sellerRequest.getBonus());
        seller.setGender(sellerRequest.getGender());

        return sellerRepository.save(seller).toDTO();
    }

    public void deleteById(long id) {
        try {
            sellerRepository.deleteById(id);
        }
        catch(DataIntegrityViolationException e) {
            throw new DatabaseException("Constraint violation, seller can't delete");
        }
    }
}
