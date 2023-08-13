package com.example.ecommerce.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;

@CrossOrigin(origins = "*")
@RestController
public class ProductController {
    @Autowired
    ProductService service;
    @PostMapping("/Add")
    public void AddProduct(@RequestBody ProductInformation product){
        service.AddProduct(product);
    }
    @PostMapping("/AddFile")
    public ResponseEntity<String> UploadFile(@RequestParam("file") MultipartFile file){
            String FileName=file.getOriginalFilename();
            try {
                file.transferTo(new File("C:\\Users\\SBS\\Desktop\\website\\front-end\\src\\assets\\" + FileName));
            }catch(Exception error){
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/find")
    public Iterable<ProductInformation> findProduct(@RequestParam String ProductName){
        return service.find(ProductName);
    }

}
