package ma.aimrane.pharmacie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.aimrane.pharmacie.entity.Zone;

public interface ZoneRepository extends JpaRepository<Zone, Integer>{
	List<Zone> findByVilleId(int ville_id);
}
