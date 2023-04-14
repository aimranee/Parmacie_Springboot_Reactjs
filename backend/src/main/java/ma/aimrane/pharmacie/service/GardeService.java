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
	private GardeRepository gardeRepository;

	@Override
	public Garde save(Garde o) {
		// TODO Auto-generated method stub
		return gardeRepository.save(o);
	}	

	@Override
	public void delete(Garde o) {
		// TODO Auto-generated method stub
		gardeRepository.delete(o);
	}

	@Override
	public Garde findById(int id) {
		// TODO Auto-generated method stub
		return gardeRepository.findById(id);
	}

	@Override
	public List<Garde> findAll() {
		// TODO Auto-generated method stub
		return gardeRepository.findAll();
	}
	
	public Garde findByType(String type) {
		// TODO Auto-generated method stub
		return gardeRepository.findByType(type);
	}

	@Override
	public void update(Garde o) {
		// TODO Auto-generated method stub
		gardeRepository.save(o);
	}
}
