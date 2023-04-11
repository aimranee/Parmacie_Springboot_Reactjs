package ma.aimrane.pharmacie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.aimrane.pharmacie.dao.IDao;
import ma.aimrane.pharmacie.entity.Garde;
import ma.aimrane.pharmacie.repository.GardeRepository;

@Service
public class GardeService implements IDao<Garde>{

	@Autowired
	GardeRepository gardeRepository;

	@Override
	public Garde save(Garde o) {
		// TODO Auto-generated method stub
		return null;
	}	

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Garde findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Garde> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	public Garde findByType(String type) {
		// TODO Auto-generated method stub
		return gardeRepository.findByType(type);
	}

	@Override
	public Garde update(int id, Garde o) {
		// TODO Auto-generated method stub
		return null;
	}
}
