package ma.aimrane.pharmacie.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.aimrane.pharmacie.entity.Role;
import ma.aimrane.pharmacie.service.RoleService;

@RestController
@RequestMapping("api/roles")
public class RoleController {

	@Autowired
    private RoleService roleService;
	
	@PostMapping("/save")
    public void save(@RequestBody Role role){
        roleService.save(role);
    }

    @GetMapping("/")
    public List<Role> findALL(){
        return roleService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id){
        Role role = roleService.findById(id);
        roleService.delete(role);
    }

    @PutMapping("/update")
    public void update(@RequestBody Role role){
        roleService.update(role);
    }
}
