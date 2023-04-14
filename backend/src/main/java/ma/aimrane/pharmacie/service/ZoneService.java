package ma.aimrane.pharmacie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import ma.aimrane.pharmacie.dao.IDao;
import ma.aimrane.pharmacie.entity.Zone;
import ma.aimrane.pharmacie.repository.ZoneRepository;

@Service
public class ZoneService implements IDao<Zone>{

	@Autowired
	private ZoneRepository zoneRepository;

	@Override
	public Zone save(Zone o) {
		// TODO Auto-generated method stub
		return zoneRepository.save(o);
	}
	

	@Override
	public void delete(Zone o) {
		// TODO Auto-generated method stub
		Zone zone = zoneRepository.findById(o.getId());
		if (zone != null)
		zoneRepository.delete(zone);
	}

	@Override
	public Zone findById(int id) {
		// TODO Auto-generated method stub
		return zoneRepository.findById(id);
	}

	@Override
	public List<Zone> findAll() {
		// TODO Auto-generated method stub
		return zoneRepository.findAll();
	}
	
	public List<Zone> findByVilleId(int id) {
		// TODO Auto-generated method stub
		return zoneRepository.findByVilleId(id);
	}

	@Override
	public void update(Zone zoneUp) {
		// TODO Auto-generated method stub
		Zone zone = zoneRepository.findById(zoneUp.getId());
		zone.setNom(zoneUp.getNom());
		zone.setVille(zoneUp.getVille());
		zoneRepository.save(zone);
	}
	
	public List<Zone> findByNom(String nom){

        return zoneRepository.findByNom(nom);
    }

	
}
