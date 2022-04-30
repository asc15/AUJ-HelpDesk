package auj.helpdesk.starter.service;

import java.util.HashMap;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import auj.helpdesk.starter.hashpassword.HashSHA256;
import auj.helpdesk.starter.model.UserInfo;
import auj.helpdesk.starter.repository.UserInfoRepository;

@Service
public class UserInfoSevice {
	@Autowired
	private UserInfoRepository userInfoRepository;

	public String addUser(UserInfo userInfo) {
		String message = "";
		try {
			String hashpassword = HashSHA256.toHexString(HashSHA256.getSHA(userInfo.getPassword()));
			userInfo.setPassword(hashpassword);
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
			profile.put("email", user.get().getEmail());
			profile.put("role", user.get().getRole());
			return profile;
		}
		return null;
	}

	public HashMap<String, String> login(String email, String password) {
		HashMap<String, String> detail = new HashMap<>();
		String message = "";
		String name = "";
		Integer id = 0;
		String role = "", department = "";
		UserInfo user = userInfoRepository.findByEmail(email);
		try {
			if (user == null) {
				message = "user does not exists !";
				detail.put("message", message);
				;
				return detail;
			} else if ((user.getPassword()).equals(HashSHA256.toHexString(HashSHA256.getSHA(password)))) {
				message = "success";
				id = user.getId();
				name = user.getName();
				department = user.getDepartment();
				role = user.getRole();
				detail.put("message", message);
				detail.put("id", id.toString());
				detail.put("name", name);
				detail.put("department", department);
				detail.put("role", role);
				return detail;
			} else {
				detail.put("message", "password do not match");
				return detail;
			}
		} catch (Exception e) {
			detail.put("message", "Exception aise..");
			return detail;
		}
	}

	public String changePassword(Integer id, HashMap<String, String> checkPassword) {
		Optional<UserInfo> user = userInfoRepository.findById(id);
		{
			try {
				if ((user.isPresent()) && ((user.get().getPassword()).equals(HashSHA256.toHexString(HashSHA256.getSHA(checkPassword.get("oldPassword")))))) {
					String newPass = HashSHA256.toHexString(HashSHA256.getSHA(checkPassword.get("newPassword")));
					user.get().setPassword(newPass);
					userInfoRepository.save(user.get());
					return "success";
				}
			} catch (Exception e) {
				return "exception .........";
			}
		}
		return "failed ,try agin!";
	}

}
