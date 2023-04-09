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
		return null;
	}

	@Override
	public void update(Pharmacie o) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Pharmacie o) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Pharmacie findById(int id) {
		// TODO Auto-generated method stub
		return pharmacieRepository.findById(id);
	}

	@Override
	public List<Pharmacie> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<Pharmacie> findByZoneId(int id) {
		return pharmacieRepository.findByZone(id);
	}
	
	
}
