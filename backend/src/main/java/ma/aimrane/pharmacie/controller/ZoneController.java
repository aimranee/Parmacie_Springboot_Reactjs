package ma.aimrane.pharmacie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.aimrane.pharmacie.entity.Ville;
import ma.aimrane.pharmacie.entity.Zone;
import ma.aimrane.pharmacie.service.VilleService;
import ma.aimrane.pharmacie.service.ZoneService;

@RestController
@RequestMapping("api")
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
}
