package ma.aimrane.pharmacie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ma.aimrane.pharmacie.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	User findByEmail(String email);
    User findByNom(String nom);
    User findById(int id);
}
