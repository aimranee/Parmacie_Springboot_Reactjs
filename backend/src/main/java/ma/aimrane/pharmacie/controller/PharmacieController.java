package ma.aimrane.pharmacie.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;

import ma.aimrane.pharmacie.entity.Zone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import ma.aimrane.pharmacie.entity.Pharmacie;
import ma.aimrane.pharmacie.service.PharmacieService;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("api/pharmacies")
@CrossOrigin
public class PharmacieController {

	@Autowired
	private PharmacieService pharmacieService;
	
//	@GetMapping("/villes/{villeId}/zones/{zoneId}/pharmacies")
//	public List<Pharmacie> findByZone(@PathVariable String villeId, @PathVariable String zoneId){
//		Ville v = villeService.findById(Integer.parseInt(villeId));
//		List<Zone> zones = v.getZones();
//		for (Zone z : zones) {
//	        if (z.getId() == Integer.parseInt(zoneId)) {
//	        	return z.getPharmacies();
//	        }
//	    }
//		return null;
//	}
	
//	@GetMapping("/pharmacies/{id}")
//	public Pharmacie findById(@PathVariable int id) {
//		Pharmacie pharmacie = pharmacieService.findById(id);
//		return pharmacie;
//	}
	
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
	
//	@GetMapping("/villes/{ville}/zones/{zone}/pharmacies/garde")
//	public List<Pharmacie> findByPeriod(@PathVariable String villeId, @PathVariable String zoneId, @RequestParam String type){
//		Ville v = villeService.findById(Integer.parseInt(villeId));
//		List<Zone> zones = v.getZones();
//		List<Pharmacie> ph = null;
//		Garde garde = gardeService.findByType(type);
//		List<Pharmacie_garde> listParmacieGarde = null;
//		
//		for (Zone z : zones) {
//	        if (z.getId() == Integer.parseInt(zoneId)) {
////	        	for (Pharmacie p : z.getPharmacies()) {
////	        		listParmacieGarde = pharmacie_GardRepository.findByGardePharmcaie(garde, p);
////	        	}
//	        }
//	    }
//
//		for (Pharmacie_garde phg : listParmacieGarde) {
//			ph.add(phg.getPharmacie());	        	
//	    }
//		
//		return ph;
//	}
	
	@PostMapping("/save")
    public void save(@RequestParam("image") MultipartFile image,
                     @RequestParam("nom") String nom,
                     @RequestParam("adresse") String adresse,
                     @RequestParam("latitude") double latitude,
                     @RequestParam("zone") int zoneid,
                     @RequestParam("longitude") double longitude) {

        Pharmacie pharmacie = new Pharmacie();
        pharmacie.setNom(nom);
        pharmacie.setAdresse(adresse);
        pharmacie.setLatitude(latitude);
        Zone zone = new Zone();
        zone.setId(zoneid);
        pharmacie.setZone(zone);
        pharmacie.setLongitude(longitude);


        try {
            String fileName = StringUtils.cleanPath(image.getOriginalFilename());
            if (fileName.contains("..")){
                System.out.println("not a valide file");
            }
            pharmacie.setPhoto(Base64.getEncoder().encodeToString(image.getBytes()));
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        pharmacieService.save(pharmacie);
    }

    @GetMapping("")
    public List<Pharmacie> findAll(){
        return pharmacieService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id){
        Pharmacie p=pharmacieService.findById(id);
        pharmacieService.delete(p);
    }

    @PutMapping("/update")
    public void update(@RequestBody Pharmacie p){
        pharmacieService.update(p);
    }


//    @GetMapping("/ville/{ville}/zone/{zone}")
//    public List<Pharmacie> findPhByVilleAndZone(@PathVariable String ville,@PathVariable String zone){
//        return pharmacieService.findPhByVilleAndZone(ville,zone);
//    }
//
//      @GetMapping("/ville/{ville}/zone/{zone}/pharmacies/{periode}")
//    public List<Pharmacie> findAllPharmacies(@PathVariable String ville, @PathVariable String zone,@PathVariable String periode){
//            return pharmacieService.findAllPharmacies(ville,zone,periode);
//      }

      @GetMapping("/{id}")
      public Pharmacie findById(@PathVariable String id){
        return pharmacieService.findById(Integer.parseInt(id));
      }

//    @GetMapping("/{id}/itineraire")
//   public String getItinerary(@PathVariable int id, @RequestParam String depart) {
//        try {
//            return  pharmacieService.getItineraire(id,depart);
//        } catch (Exception e) {
//            throw new RuntimeException(e);
//        }
//
//    }
}
