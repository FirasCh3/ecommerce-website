package com.example.ecommerce.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<ProductInformation,String> {
    @Query("select p from ProductInformation p where p.ProductName=?1")
    Iterable<ProductInformation> FindByName(String ProductName);
}
