package com.example.ecommerce.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
public class AdminService {
    @Autowired
    AdminRepository Repository;
    BCryptPasswordEncoder bcrypt=new BCryptPasswordEncoder();

    public Map<String,String> authenticate(Map<String,String> admin){
        Map<String,String> token= new HashMap<>();
        token.put("token",null);
        for (AdminInformation item:Repository.findAll()) {
            if(Objects.equals(item.Name,admin.get("name")) && bcrypt.matches(admin.get("password"),item.Password)){
                token.replace("token", item.Password);
                return token;
            }
        }
        return token;

    }
    public void saveAdmin(AdminInformation admin){
        admin.Password=bcrypt.encode(admin.Password);
        Repository.save(admin);
    }

}
