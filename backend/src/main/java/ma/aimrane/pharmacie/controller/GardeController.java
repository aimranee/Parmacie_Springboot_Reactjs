package ma.aimrane.pharmacie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.aimrane.pharmacie.entity.Garde;
import ma.aimrane.pharmacie.service.GardeService;

@RestController
@RequestMapping("api/gardes")
@CrossOrigin
public class GardeController {
	
	@Autowired
    private GardeService gardeService;
	
	@GetMapping("")
    public List<Garde> findAll(){
        return gardeService.findAll();
    }

    @PostMapping("/save")
    public void save(@RequestBody Garde o){
        gardeService.save(o);
    }


    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id){
        Garde garde = gardeService.findById(id);
        if (garde != null)
        gardeService.delete(garde);
    }

    @PutMapping("/update")
    public void update(@RequestBody Garde o){
    	Garde garde = gardeService.findById(o.getId());
        if (garde != null)
        gardeService.update(o);
    }

}
