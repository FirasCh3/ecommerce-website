package com.example.ecommerce.Admin;
import jakarta.persistence.*;
@Entity(name = "admin")
public class AdminInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    public String Name;
    public String Password;
}
