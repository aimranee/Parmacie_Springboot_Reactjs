package ma.aimrane.pharmacie.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.aimrane.pharmacie.dao.IDao;
import ma.aimrane.pharmacie.entity.Role;
import ma.aimrane.pharmacie.repository.RoleRepository;
@Service
public class RoleService implements IDao<Role>{

	@Autowired
    private RoleRepository roleRepository;
	
	@Override
	public Role save(Role o) {
		// TODO Auto-generated method stub
		return roleRepository.save(o);
	}

	@Override
	public void update(Role o) {
		// TODO Auto-generated method stub
		Role role = roleRepository.findById(o.getId());
		if (role != null)
		roleRepository.save(o);
	}

	@Override
	public void delete(Role o) {
		// TODO Auto-generated method stub
		Role role = roleRepository.findById(o.getId());
		if (role != null)
		roleRepository.delete(o);
	}

	@Override
	public Role findById(int id) {
		// TODO Auto-generated method stub
		return roleRepository.findById(id);
	}

	@Override
	public List<Role> findAll() {
		// TODO Auto-generated method stub
		return roleRepository.findAll();
	}

}
