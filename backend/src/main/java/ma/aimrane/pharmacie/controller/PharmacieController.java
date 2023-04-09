package ma.aimrane.pharmacie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ma.aimrane.pharmacie.entity.Garde;
import ma.aimrane.pharmacie.entity.Pharmacie;
import ma.aimrane.pharmacie.entity.Pharmacie_garde;
import ma.aimrane.pharmacie.entity.Ville;
import ma.aimrane.pharmacie.entity.Zone;
import ma.aimrane.pharmacie.repository.Pharmacie_gardeRepository;
import ma.aimrane.pharmacie.service.GardeService;
import ma.aimrane.pharmacie.service.PharmacieGardService;
import ma.aimrane.pharmacie.service.PharmacieService;
import ma.aimrane.pharmacie.service.VilleService;

@RestController
@RequestMapping("api")
public class PharmacieController {

	@Autowired
	private PharmacieService pharmacieService;
	@Autowired
	private VilleService villeService;
	@Autowired
	private PharmacieGardService pharmaciegardeService;
	@Autowired
	private Pharmacie_gardeRepository pharmacie_GardRepository;
	@Autowired
	private GardeService gardeService;
	
	@GetMapping("/villes/{villeId}/zones/{zoneId}/pharmacies")
	public List<Pharmacie> findByZone(@PathVariable String villeId, @PathVariable String zoneId){
		Ville v = villeService.findById(Integer.parseInt(villeId));
		List<Zone> zones = v.getZones();
		for (Zone z : zones) {
	        if (z.getId() == Integer.parseInt(zoneId)) {
	        	return z.getPharmacies();
	        }
	    }
		return null;
	}
	
	@GetMapping("/pharmacies/{id}")
	public Pharmacie findById(@PathVariable int id) {
		Pharmacie pharmacie = pharmacieService.findById(id);
		return pharmacie;
	}
	
//	@Transactional
//	@PostMapping("/villes/ville/zones/{zone}/pharmacies/garde/{periode}")  
//	public List<Pharmacie> findByF(@PathVariable  String zone,@PathVariable  String periode) throws JsonProcessingException  {
//		
//		System.out.println(pharmacieRepository.FindPharmacieByZonePeriode(zone,periode));
//		
//		
//			return pharmacieRepository.FindPharmacieByZonePeriode(zone,periode);
//		
//		
//	}
	
	@GetMapping("/villes/{ville}/zones/{zone}/pharmacies/garde")
	public List<Pharmacie> findByPeriod(@PathVariable String villeId, @PathVariable String zoneId, @RequestParam String type){
		Ville v = villeService.findById(Integer.parseInt(villeId));
		List<Zone> zones = v.getZones();
		List<Pharmacie> ph = null;
		Garde garde = gardeService.findByType(type);
		List<Pharmacie_garde> listParmacieGarde = null;
		
		for (Zone z : zones) {
	        if (z.getId() == Integer.parseInt(zoneId)) {
	        	for (Pharmacie p : z.getPharmacies()) {
	        		listParmacieGarde = pharmacie_GardRepository.findByGardePharmcaie(garde, p);
	        	}
	        }
	    }

		for (Pharmacie_garde phg : listParmacieGarde) {
			ph.add(phg.getPharmacie());	        	
	    }
		
		
		
		
		
		return ph;
	}
}
