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

import ma.aimrane.pharmacie.entity.Pharmacie_garde;
import ma.aimrane.pharmacie.service.PharmacieGardeService;

@RestController
@CrossOrigin
@RequestMapping("api/pharmacieGarde")
public class PharmacieGardeController {

	@Autowired
    private PharmacieGardeService pharmacieGardeService;
	
	@PostMapping("/save")
	public void save(@RequestBody Pharmacie_garde pharmacieGarde){
		pharmacieGardeService.save(pharmacieGarde);
	}
	
	@GetMapping("/")
	public List<Pharmacie_garde> findAll(){
	    return pharmacieGardeService.findAll();
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id){
		Pharmacie_garde ph = pharmacieGardeService.findById(id);
		if (ph != null)
	    pharmacieGardeService.delete(ph);
	}
	
	@PutMapping("/update")
	public void update(@RequestBody Pharmacie_garde o){
		pharmacieGardeService.update(o);
	}
	    
}
