package ma.aimrane.pharmacie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.aimrane.pharmacie.dao.IDao;
import ma.aimrane.pharmacie.entity.Pharmacie;
import ma.aimrane.pharmacie.repository.PharmacieRepository;

@Service
public class PharmacieService implements IDao<Pharmacie>{

	@Autowired
	private PharmacieRepository pharmacieRepository;

	@Override
	public Pharmacie save(Pharmacie o) {
		// TODO Auto-generated method stub
		return pharmacieRepository.save(o);
	}

	@Override
	public void update(Pharmacie o) {
		// TODO Auto-generated method stub
		pharmacieRepository.save(o);
	}

	@Override
	public void delete(Pharmacie o) {
		// TODO Auto-generated method stub
		pharmacieRepository.delete(o);
	}

	@Override
	public Pharmacie findById(int id) {
		// TODO Auto-generated method stub
		return pharmacieRepository.findById(id);
	}

	@Override
	public List<Pharmacie> findAll() {
		// TODO Auto-generated method stub
		return pharmacieRepository.findAll();
	}
	
	public List<Pharmacie> findByZoneId(int id) {
		return pharmacieRepository.findByZone(id);
	}
	
//	public List<Pharmacie> findPhByVilleAndZone(String ville, String zone) {
//        return pharmacieRepository.findByVilleAndZone(ville, zone);
//    }
//
//    public List<Pharmacie> findAllPharmacies(String ville, String zone, String periode) {
//        return pharmacieRepository.findAllPharmacies(ville, zone, periode);
//    }


//    public String getItineraire(int id, String depart) throws Exception {
//        String apikey="AIzaSyDovsDZ877O6_5P5l1aAcqa9xVIYL99fCk";
//        Optional<Pharmacie> optionalPharmacie = Optional.ofNullable(pharmacieRep.findById(id));
//        Pharmacie pharmacie = optionalPharmacie.orElseThrow(() -> new Exception("Pharmacie not found !!!"));
//        String destination = pharmacie.getLatitude() + "," + pharmacie.getLongitude();
//        String url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + depart + "&destination=" + destination + "&key="+apikey;
//        RestTemplate restTemplate = new RestTemplate();
//        String response = restTemplate.getForObject(url, String.class);
//        return response;
//    }
	
	
}
