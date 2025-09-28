package com.vendas360.vendas_backend.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.vendas360.vendas_backend.dtos.SellerRequest;
import com.vendas360.vendas_backend.dtos.SellerResponse;
import com.vendas360.vendas_backend.services.SellerService;

@CrossOrigin
@RestController
@RequestMapping("sellers")
public class SellerController {
    
    @Autowired
    SellerService sellerService;

    @GetMapping()
    public ResponseEntity<List<SellerResponse>> getSellers() {
        return ResponseEntity.ok(sellerService.getAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<SellerResponse> getSeller(@PathVariable long id) {
        SellerResponse sellerResponse = sellerService.getById(id);
        return ResponseEntity.ok(sellerResponse);
    }

    @PostMapping()
    public ResponseEntity<SellerResponse> saveSeller(@Validated @RequestBody SellerRequest sellerRequest) {

        SellerResponse seller = sellerService.save(sellerRequest);

        URI location = ServletUriComponentsBuilder
        .fromCurrentRequest()
        .path("/{id}")
        .buildAndExpand(seller.getId())
        .toUri();

        return ResponseEntity.created(location).body(seller); 
    }

    @PutMapping("{id}")
    public ResponseEntity<SellerResponse> updateSeller(@PathVariable long id, @Validated @RequestBody SellerRequest sellerRequest){
        SellerResponse updatedSeller = sellerService.update(id, sellerRequest);
        return ResponseEntity.ok(updatedSeller);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteSeller(@PathVariable long id) {

        sellerService.deleteById(id);

        return ResponseEntity.noContent()
                    .header("message", "Vendedor excluído com sucesso")
                    .build();
    }
}
