package auj.helpdesk.starter.service;

import java.util.HashMap;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import auj.helpdesk.starter.model.UserInfo;
import auj.helpdesk.starter.repository.UserInfoRepository;

@Service
public class UserInfoSevice {
	@Autowired
	private UserInfoRepository userInfoRepository;

	public String addUser(UserInfo userInfo) {
		String message = "";
		try {
			userInfoRepository.save(userInfo);
			message = userInfo.getId().toString();
		} catch (Exception e) {
			message = e.toString();
		}
		return message;
	}

	public HashMap<String, String> userProfile(Integer id) {
		Optional<UserInfo> user = userInfoRepository.findById(id);
		if (user.isPresent()) {
			HashMap<String, String> profile = new HashMap<>();
			profile.put("name", user.get().getName());
			profile.put("department", user.get().getDepartment());
			profile.put("email",user.get().getEmail());
			profile.put("role",user.get().getRole());
			return profile;
		}
		return null;
	}
	public HashMap<String, String> login(String email,String password) {
		HashMap<String, String> detail= new HashMap<>();
		String message="";
		String name="";
		Integer id=0;
		UserInfo user= userInfoRepository.findByEmail(email);
		if (user==null) {
			message="user does not exists !";
			detail.put("message", message);;
			return detail;
		}
		else if((user.getPassword()).equals(password))
		{
			message="success";
			id=user.getId();
			name=user.getName();
			detail.put("message", message);
			detail.put("id", id.toString());
			detail.put("name", name);
			return detail;
		}
		else {
			 detail.put("message", "password do not match");
			 return detail;
		}
	}

	public String changePassword(Integer id, HashMap<String, String> checkPassword) {
		Optional<UserInfo> user = userInfoRepository.findById(id);
		{
			if(user.isPresent() && (user.get().getPassword().equals(checkPassword.get("oldPassword")))) {
				String newPassword=checkPassword.get("newPassword");
				UserInfo u=user.get();
				u.setPassword(newPassword);
				userInfoRepository.save(u);
				return "success";
			}
		}
		return "failed ,try agin!";
	}

}
