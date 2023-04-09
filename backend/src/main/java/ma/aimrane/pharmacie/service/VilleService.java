package ma.aimrane.pharmacie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.aimrane.pharmacie.dao.IDao;
import ma.aimrane.pharmacie.entity.Ville;
import ma.aimrane.pharmacie.repository.VilleRepository;

@Service
public class VilleService implements IDao<Ville>{

	@Autowired
	private VilleRepository villeRepository;
	
	public VilleService() {
		super();
	}

	@Override
	public Ville save(Ville o) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(Ville o) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(Ville o) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Ville findById(int id) {
		// TODO Auto-generated method stub villeRepository.finById(id);
		return villeRepository.findById(id);
	}

	@Override
	public List<Ville> findAll() {
		// TODO Auto-generated method stub
		return villeRepository.findAll();
	}

}
