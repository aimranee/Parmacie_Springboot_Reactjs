package ma.aimrane.pharmacie.repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ma.aimrane.pharmacie.entity.Pharmacie_garde;
@Repository
public interface PharmacieGardeRepository extends JpaRepository<Pharmacie_garde, Integer>{
	
	Pharmacie_garde findById(int id);
//
//    @Query("select gp from pharmacie_garde gp where CURRENT_DATE NOT BETWEEN gp.pg.date_debut and gp.date_fin")
//    List<Pharmacie_garde> findPharmaciesDisponible();
//
//    @Query("select gp from pharmacie_garde gp where CURRENT_DATE BETWEEN gp.pg.date_debut and gp.date_fin ")
//    List<Pharmacie_garde> findPharmaciesEnGarde();
//
//    @Query(value="select gp.pharmacie, min(sqrt(power((gp.pharmacie.latitude-:lat),2)+power((gp.pharmacie.longitude-:long),2))) from pharmacie_garde gp where gp.pharmacie.zone.nom = :zone and gp.pharmacie.zone.ville.nom = :ville and gp.garde.type like 'jour'")
//    List<ArrayList> findDistanceJour(@Param("lat") double lat, @Param("long") double lon, @Param("zone") String zone, @Param("ville") String ville);
//
//    @Query(value="select gp.pharmacie, min(sqrt(power((gp.pharmacie.latitude-:lat),2)+power((gp.pharmacie.longitude-:long),2))) from pharmacie_garde gp where gp.pharmacie.zone.nom = :zone and gp.pharmacie.zone.ville.nom = :ville and gp.garde.type like 'nuit'")
//    List<ArrayList> findDistanceNuit(@Param("lat") double lat, @Param("long") double lon, @Param("zone") String zone, @Param("ville") String ville);
//	
}
