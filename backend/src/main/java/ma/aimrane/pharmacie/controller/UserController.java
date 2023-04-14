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
import ma.aimrane.pharmacie.entity.User;
import ma.aimrane.pharmacie.service.RoleService;
import ma.aimrane.pharmacie.service.UserService;

@RestController
@RequestMapping("api/users")
@CrossOrigin
public class UserController {
	
	@Autowired
    private UserService userService;
	
	@Autowired
    private RoleService roleService;
	
	@PostMapping("/save")
    public void save(@RequestBody User user){
        userService.save(user);
    }

    @GetMapping("/")
    public List<User> findALL(){
       return userService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id){
        userService.delete(userService.findById(id));
    }

    @PutMapping("/update")
    public void update(@RequestBody User user){
        userService.update(user);
    }

//    @PostMapping("/affect/user/{idU}/role/{idR}")
//    public void affectRoleToUser(@PathVariable String idU,@PathVariable String idR){
//        User user = userService.findById(Integer.parseInt(idU));
//        Role role = roleService.findById(Integer.parseInt(idR));
//        user.getRoles().add(role);
//        userService.save(user);
//    }
	
}
