package ma.aimrane.pharmacie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.aimrane.pharmacie.entity.Garde;

public interface GardeRepository extends JpaRepository<Garde, Integer> {
	Garde findByType(String type);
}
