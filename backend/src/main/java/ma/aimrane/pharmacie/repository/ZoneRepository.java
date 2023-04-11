package ma.aimrane.pharmacie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.aimrane.pharmacie.entity.Zone;


@Repository
public interface ZoneRepository extends JpaRepository<Zone, Integer>{
	List<Zone> findByVilleId(int ville_id);
}
