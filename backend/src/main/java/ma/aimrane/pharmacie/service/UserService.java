package ma.aimrane.pharmacie.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.aimrane.pharmacie.dao.IDao;
import ma.aimrane.pharmacie.entity.User;
import ma.aimrane.pharmacie.repository.UserRepository;

@Service
public class UserService implements IDao<User>{

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User save(User o) {
		// TODO Auto-generated method stub
		return userRepository.save(o);
	}

	@Override
	public void update(User o) {
		// TODO Auto-generated method stub
		userRepository.save(o);
	}

	@Override
	public void delete(User id) {
		// TODO Auto-generated method stub
		userRepository.delete(id);
	}

	@Override
	public User findById(int id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id);
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}
}
