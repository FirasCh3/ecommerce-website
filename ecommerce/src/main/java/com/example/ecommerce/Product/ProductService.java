package com.example.ecommerce.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class ProductService {
    @Autowired
    ProductRepository Repository;
    public void AddProduct(ProductInformation product){
        Repository.save(product);

    }

    public Iterable<ProductInformation> find(String ProductName){
        if(Objects.equals(ProductName, "")){
            return Repository.findAll();
        }else {
            return Repository.FindByName(ProductName);
        }
    }

}
