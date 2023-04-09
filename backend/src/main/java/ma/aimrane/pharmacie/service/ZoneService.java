package ma.aimrane.pharmacie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
		return null;
	}

	@Override
	public void update(Zone o) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Zone o) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Zone findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Zone> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<Zone> findByVilleId(int id) {
		// TODO Auto-generated method stub
		return zoneRepository.findByVilleId(id);
	}
	
	
}
