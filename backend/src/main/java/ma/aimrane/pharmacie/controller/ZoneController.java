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

import ma.aimrane.pharmacie.entity.Ville;
import ma.aimrane.pharmacie.entity.Zone;
import ma.aimrane.pharmacie.service.VilleService;
import ma.aimrane.pharmacie.service.ZoneService;

@RestController
@RequestMapping("api/zones")
@CrossOrigin
public class ZoneController {

	@Autowired
	private ZoneService zoneService;
	@Autowired
	private VilleService villeService;
	
	@GetMapping("/villes/{ville}/zones")
	public List<Zone> findByVille(@PathVariable int ville){
		Ville v = villeService.findById(ville);
		return zoneService.findByVilleId(v.getId());
	}
	
	@GetMapping("/")
    public List<Zone> findAll(){
        return  zoneService.findAll();
    }

    @PostMapping("/save")
    public void save(@RequestBody Zone zone){
        zoneService.save(zone);
    }


    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id){
        Zone z = zoneService.findById(id);
        if(z != null)
        zoneService.delete(z);
    }

    @PutMapping("/update")
    public void update(@RequestBody Zone z){
        zoneService.update(z);
    }

    @GetMapping("/ville/{nom}")
    public List<Zone> findByNom(@PathVariable String nom){
        return zoneService.findByNom(nom);
    }
}
