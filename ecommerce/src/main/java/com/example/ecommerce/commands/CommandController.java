package com.example.ecommerce.commands;
import com.example.ecommerce.Product.ProductInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
public class CommandController {
    @Autowired
    CommandService commandService;

    @PostMapping("/AddCommand")
    public void AddCommand(@RequestBody CommandEntity command) {
        command.CommandId = String.valueOf(UUID.randomUUID());
        command.CommandDate = String.valueOf(LocalDate.now());
        commandService.add(command);

    }
    //commandService.add(command);

    @GetMapping("/AllCommands")
    public List<CommandEntity> ViewCommands() {
        return commandService.All();
    }
    @DeleteMapping("/DeleteCommand")
    public void DeleteCommand(@RequestParam String CommandId){
        commandService.delete(CommandId);
    }
}