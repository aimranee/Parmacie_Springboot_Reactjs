package ma.aimrane.pharmacie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.aimrane.pharmacie.entity.Garde;
@Repository
public interface GardeRepository extends JpaRepository<Garde, Integer> {
	Garde findByType(String type);
	Garde findById(int id);
}
