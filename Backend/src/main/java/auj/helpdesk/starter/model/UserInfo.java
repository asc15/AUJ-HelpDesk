package auj.helpdesk.starter.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class UserInfo {
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String name;
	   
	private String department;
	
	private String email;
	private String password;

	private String role;
	
	public UserInfo() {
		super();
	}
	public UserInfo(Integer id, String name, String department, String email, String password, String role) {
		super();
		this.id = id;
		this.name = name;
		this.department = department;
		this.email = email;
		this.password = password;
		this.role = role;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	
}
