package ma.aimrane.pharmacie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.aimrane.pharmacie.entity.Ville;

@Repository
public interface VilleRepository extends JpaRepository<Ville, Integer>{
	//Ville findByNom(String nom);
	Ville findById(int id);
}
