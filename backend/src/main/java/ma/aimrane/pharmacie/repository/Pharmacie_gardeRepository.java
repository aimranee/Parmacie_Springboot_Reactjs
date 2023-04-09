package ma.aimrane.pharmacie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import ma.aimrane.pharmacie.entity.Garde;
import ma.aimrane.pharmacie.entity.Pharmacie;
import ma.aimrane.pharmacie.entity.Pharmacie_garde;

public interface Pharmacie_gardeRepository extends JpaRepository<Pharmacie_garde, Integer>{
	
	@Query
	List<Pharmacie_garde> findByGardePharmcaie(Garde garde, Pharmacie pharmacie);
	
}
