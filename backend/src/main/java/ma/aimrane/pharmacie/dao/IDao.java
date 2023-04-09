package ma.aimrane.pharmacie.dao;

import java.util.List;

public interface IDao<T> {
	T save (T o);
	
	void update(T o);
	
	void delete(T o);
	
	T findById(int id);
	
	List<T> findAll();
	
}
