package ma.aimrane.pharmacie.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ma.aimrane.pharmacie.entity.Role;
@Repository
public interface RoleRepository extends JpaRepository<Role, Integer>{

	Role findById(int id);

    Role findByNom(String nom);
    
}
