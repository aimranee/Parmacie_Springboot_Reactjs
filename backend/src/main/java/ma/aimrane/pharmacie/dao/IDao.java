package ma.aimrane.pharmacie.dao;

import java.util.List;

public interface IDao<T> {
	T save (T o);
	
	T update(int id, T o);
	
	void delete(int id);
	
	T findById(int id);
	
	List<T> findAll();
	
}
