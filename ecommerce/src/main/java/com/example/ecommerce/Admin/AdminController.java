package com.example.ecommerce.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
public class AdminController {
    @Autowired
    AdminService adminService;
    @PostMapping(value = "/saveAdmin")
    public void saveAdmin(@RequestBody AdminInformation admin){
         adminService.saveAdmin(admin);
    }
    @PostMapping(value = "/Auth",produces = {MediaType.APPLICATION_JSON_VALUE})
    public Map<String,String> Authenticate(@RequestBody Map<String,String> admin){
        return adminService.authenticate(admin);
    }
}
