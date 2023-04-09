package ma.aimrane.pharmacie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.aimrane.pharmacie.dao.IDao;
import ma.aimrane.pharmacie.entity.Pharmacie;
import ma.aimrane.pharmacie.repository.Pharmacie_gardeRepository;

@Service
public class PharmacieGardService implements IDao<Pharmacie>{
	@Autowired
	Pharmacie_gardeRepository pharmacie_gardeRepository;

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
		return null;
	}

	@Override
	public List<Pharmacie> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
}
