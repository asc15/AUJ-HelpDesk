package auj.helpdesk.starter.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import auj.helpdesk.starter.model.Question;
import auj.helpdesk.starter.repository.QuestionRepository;
import auj.helpdesk.starter.service.QuestionService;

@CrossOrigin("http://localhost:3000")
@RestController
public class QuestionController {
	@Autowired
	private QuestionService questionService;
	
	@RequestMapping(method = RequestMethod.POST,value = "/askquestion/{id}/post")
	public String postQuestion(@RequestBody Question question , @PathVariable Integer id) {
		String message=questionService.postQuestion(question,id);
		return message;
	}
	
	@RequestMapping(method = RequestMethod.GET , value = "/{id}/allquestion")
	public ArrayList<Question> getAllQuestion(@PathVariable Integer id) {
		return questionService.getAllQuestion(id);
	}
	@RequestMapping(method = RequestMethod.GET, value="/{id}/myquestion")
	public ArrayList<Question> myQuestions(@PathVariable Integer id){
		return questionService.myQuestions(id);
	}
	@RequestMapping (method = RequestMethod.PUT, value = "/{userId}/updatequestion/{id}")
	public String updateQuestion(@PathVariable Integer userId , @PathVariable Integer id , @RequestBody HashMap<String, String> newquestion ) {
		String question=newquestion.get("question");
		return questionService.updateQuestion(userId,id,question);
		
	}
	@RequestMapping (value = "/{userId}/deletequestion/{id}",method = RequestMethod.DELETE)
	public String deleteQuestion(@PathVariable Integer userId , @PathVariable Integer id ) {
		return questionService.deleteQuestion(userId,id);
		
	}
}
