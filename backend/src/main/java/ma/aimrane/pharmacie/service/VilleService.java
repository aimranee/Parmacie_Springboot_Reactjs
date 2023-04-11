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
		return villeRepository.save(o);
	}

	@Override
	public Ville update(int id, Ville villeUp) {
		// TODO Auto-generated method stub
		Ville ville = villeRepository.findById(id);
		ville.setNom(villeUp.getNom());
		return villeRepository.save(ville);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
	}

	@Override
	public Ville findById(int id) {
		// TODO Auto-generated method stub 
		return villeRepository.findById(id);
	}

	@Override
	public List<Ville> findAll() {
		// TODO Auto-generated method stub
		return villeRepository.findAll();
	}

	public Ville getVilleById(int id) {
		// TODO Auto-generated method stub
        return villeRepository.findById(id);
	}
}
