package ma.aimrane.pharmacie.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
public class Pharmacie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String adresse;
	private double latitude;
	private double longitude;
	private String nom;
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private String photo;

	@JoinColumn(name = "zone_id")
	@ManyToOne
	private Zone zone;
	
	@OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name = "user")
    @JsonIgnore
    private User user;
	
	@OneToMany(mappedBy = "pharmacie", fetch = FetchType.EAGER)
	@JsonIgnore
    private List<Pharmacie_garde> pharmacieGardes;
	
	public Pharmacie() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public Zone getZone() {
		return zone;
	}

	public void setZone(Zone zone) {
		this.zone = zone;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Pharmacie_garde> getPharmacieGardes() {
		return pharmacieGardes;
	}

	public void setPharmacieGardes(List<Pharmacie_garde> pharmacieGardes) {
		this.pharmacieGardes = pharmacieGardes;
	}

	
}
