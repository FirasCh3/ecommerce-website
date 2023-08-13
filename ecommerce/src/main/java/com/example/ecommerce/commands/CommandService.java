package com.example.ecommerce.commands;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandService {
    @Autowired
    CommandRepository commandRepository;
    public void add(CommandEntity command){
        commandRepository.save(command);
    }
    public List<CommandEntity> All(){
        return (List<CommandEntity>) commandRepository.findAll();
    }
    public void delete(String CommandId){
        commandRepository.deleteById(CommandId);

    }
}
