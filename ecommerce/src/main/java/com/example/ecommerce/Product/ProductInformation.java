package com.example.ecommerce.Product;
import com.example.ecommerce.commands.CommandEntity;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name = "product_information")
public class ProductInformation {
    @Id
    public String ProductId;
    public String ProductName;
    public float ProductPrice;
    public String ProductDescription;
    @JsonBackReference
    @ManyToMany(mappedBy = "product",cascade = CascadeType.ALL)
    public Set<CommandEntity> command;


}
