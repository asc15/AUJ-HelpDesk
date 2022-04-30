package auj.helpdesk.starter.repository;


import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import auj.helpdesk.starter.model.UserInfo;

public interface UserInfoRepository extends CrudRepository<UserInfo, Integer> {
	public Optional<UserInfo> findById(Integer id);
	public UserInfo findByEmail(String email);
	public void save(Optional<UserInfo> user);
	
}
