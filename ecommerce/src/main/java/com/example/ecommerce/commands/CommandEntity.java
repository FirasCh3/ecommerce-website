package com.example.ecommerce.commands;

import com.example.ecommerce.Product.ProductInformation;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.Fetch;

import java.util.List;
import java.util.Set;

@Entity
public class CommandEntity {
    @Id
    public String CommandId;
    public String CommandDate;
    public String UserName;
    public String UserAdress;
    public String UserEmail;
    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(
            name = "commands",
            joinColumns = @JoinColumn(name = "command_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))

    public Set<ProductInformation> product;

}
