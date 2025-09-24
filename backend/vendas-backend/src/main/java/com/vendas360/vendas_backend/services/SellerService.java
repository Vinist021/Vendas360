package com.vendas360.vendas_backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.vendas360.vendas_backend.models.Seller;
import com.vendas360.vendas_backend.repositories.SellerRepository;

public class SellerService {
    
    @Autowired
    SellerRepository sellerRepository;

    public Seller getById(long id) {
        return sellerRepository.getReferenceById(id);
    }

    public List<Seller> getAll() {
        return sellerRepository.findAll();                               
    }

    public Seller save(Seller seller) {
        return sellerRepository.save(seller);
    }

    public void update(long id, Seller newSeller) {
        Seller seller = sellerRepository.getReferenceById(id);

        seller.setName(newSeller.getName());
        seller.setSalary(newSeller.getSalary());
        seller.setBonus(newSeller.getBonus());
        seller.setGender(newSeller.getGender());

        sellerRepository.save(seller);
    }

    public void deleteById(long id) {
        sellerRepository.deleteById(id);
    }
}
