package ma.aimrane.pharmacie.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ma.aimrane.pharmacie.entity.Pharmacie;

@Repository
public interface PharmacieRepository extends JpaRepository<Pharmacie, Integer> {
	List<Pharmacie> findByZone(int zone_id);
	
	Pharmacie findById(int id);
//
//    @Query("SELECT p FROM Pharmacie p JOIN p.zone z JOIN z.ville v WHERE v.nom =?1 AND z.nom =?2")
//    List<Pharmacie> findByVilleAndZone(String ville, String zone);
//
//    @Query("SELECT p FROM Pharmacie p JOIN p.zone z JOIN z.ville v JOIN p.pharmacie_garde pg WHERE v.nom = :ville AND z.nom = :zone AND pg.garde.type = :period ")
//    List<Pharmacie> findAllPharmacies(@Param("ville") String ville, @Param("zone") String zone, @Param("period") String period);
}
