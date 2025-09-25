package com.vendas360.vendas_backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vendas360.vendas_backend.models.Seller;
import com.vendas360.vendas_backend.services.SellerService;

@CrossOrigin
@RestController
@RequestMapping("sellers")
public class SellerController {
    
    @Autowired
    SellerService sellerService;

    @GetMapping()
    public List<Seller> getSellers() {
        return sellerService.getAll();
    }

    @GetMapping("{id}")
    public Seller getSeller(@PathVariable long id) {
        return sellerService.getById(id);
    }

    @PostMapping()
    public Seller saveSeller(@RequestBody Seller seller) {
        return sellerService.save(seller);
    }

    @PutMapping("{id}")
    public void updateSeller(@PathVariable long id, @RequestBody Seller seller ){
        sellerService.update(id, seller);
    }

    @DeleteMapping("{id}")
    public void deleteSeller(@PathVariable long id) {
        sellerService.deleteById(id);
    }

}
