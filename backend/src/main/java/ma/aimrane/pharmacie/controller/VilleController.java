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

import ma.aimrane.pharmacie.service.VilleService;
import ma.aimrane.pharmacie.entity.Ville;


@RestController
@CrossOrigin
@RequestMapping("api/villes")
public class VilleController {
	
	@Autowired
	private VilleService villeService;
	
	@GetMapping("/")
	public List<Ville> findAll() {
		return villeService.findAll();
	}
	
	@GetMapping("/{id}")
    public Ville getCityById(@PathVariable int id) {
        return villeService.getVilleById(id);
    }

    @PostMapping("/save")
    public Ville createVille(@RequestBody Ville ville) {
        return villeService.save(ville);
    }

    @PutMapping("/update")
    public Ville updateVille(@RequestBody Ville ville) {
    	Ville exist = villeService.findById(ville.getId());
        if (exist != null) {
        	exist.setNom(ville.getNom());
            return villeService.save(exist);
        }
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteVille(@PathVariable int id) {
    	Ville exist = villeService.findById(id);
        if (exist != null) {
        	villeService.delete(exist);
        }
    	
    }
	
}
