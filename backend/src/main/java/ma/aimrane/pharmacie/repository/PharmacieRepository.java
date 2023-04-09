package ma.aimrane.pharmacie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.aimrane.pharmacie.entity.Pharmacie;


public interface PharmacieRepository extends JpaRepository<Pharmacie, Integer> {
	List<Pharmacie> findByZone(int zone_id);
	Pharmacie findById(int id);
}
