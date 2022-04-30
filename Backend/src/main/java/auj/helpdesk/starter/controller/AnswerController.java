package auj.helpdesk.starter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import auj.helpdesk.starter.model.Answer;
import auj.helpdesk.starter.service.AnswerService;

@CrossOrigin("http://localhost:3000")
@RestController
public class AnswerController {
	@Autowired 
	AnswerService answerService;
	@RequestMapping(method = RequestMethod.POST,value = "/answer/{uId}/question/{qId}")
	public String postAnswer(@PathVariable Integer uId , @PathVariable Integer qId ,@RequestBody Answer answer)
	{
		return answerService.postAnswer(uId,qId,answer);
	}
	
}
