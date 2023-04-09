package ma.aimrane.pharmacie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.aimrane.pharmacie.service.VilleService;
import ma.aimrane.pharmacie.entity.Ville;
import ma.aimrane.pharmacie.entity.Zone;
import ma.aimrane.pharmacie.repository.VilleRepository;


@RestController
@RequestMapping("api")
public class VilleController {
	
	@Autowired
	private VilleService villeService;
	
	@GetMapping("/villes")
	public List<Ville> findAll() {
		return villeService.findAll();
	}
	
}
