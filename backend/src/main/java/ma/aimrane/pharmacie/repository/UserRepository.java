package ma.aimrane.pharmacie.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.aimrane.pharmacie.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
