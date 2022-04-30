package auj.helpdesk.starter.controller;

import java.util.HashMap;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import auj.helpdesk.starter.model.UserInfo;
import auj.helpdesk.starter.service.UserInfoSevice;
import net.bytebuddy.asm.Advice.Return;
@CrossOrigin("http://localhost:3000")
@RestController
public class UserInfoController {

	@Autowired
	private UserInfoSevice userInfoSevice;
	
	@RequestMapping(method = RequestMethod.POST,value = "/register")
	public String registerNewUser(@RequestBody UserInfo userInfo ) {
		String message=userInfoSevice.addUser(userInfo);
		return message;
	}
	@RequestMapping("/user/{id}/profile")
	public HashMap<String, String> viewProfile(@PathVariable Integer id){
		return userInfoSevice.userProfile(id);	
		
	}
	@RequestMapping(method=RequestMethod.POST ,value="/login")
	public HashMap<String, String>  login(@RequestBody HashMap<String, String> userDetails) {
		HashMap<String, String>  message=userInfoSevice.login(userDetails.get("email"),userDetails.get("password"));
		return message;
		
	}

	@RequestMapping(method=RequestMethod.POST,value = "/user/{id}/profile/changepassword")
	public String changePassword(@PathVariable Integer id, @RequestBody HashMap<String, String> checkPassword)
	{
		return userInfoSevice.changePassword(id, checkPassword);
		
	}
}
