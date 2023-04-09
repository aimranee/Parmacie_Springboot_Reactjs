package ma.aimrane.pharmacie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.aimrane.pharmacie.entity.Ville;


public interface VilleRepository extends JpaRepository<Ville, Integer>{
	//Ville findByNom(String nom);
	Ville findById(int id);
}
