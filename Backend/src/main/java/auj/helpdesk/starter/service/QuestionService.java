package auj.helpdesk.starter.service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import auj.helpdesk.starter.model.Question;
import auj.helpdesk.starter.model.UserInfo;
import auj.helpdesk.starter.repository.QuestionRepository;
import auj.helpdesk.starter.repository.UserInfoRepository;
@Service
public class QuestionService{

	@Autowired
	UserInfoRepository userInfoRepository;
	@Autowired
	QuestionRepository questionRepository;
	
	public String postQuestion(Question question, Integer id) {
		Optional<UserInfo> user= userInfoRepository.findById(id);
		if(user.isPresent()) {
			questionRepository.save(question);
			return "Question Posted";
		}
		return "Something went wrong. Try again";
	}

	
	public ArrayList<Question> getAllQuestion(Integer id) {
		Optional<UserInfo> user= userInfoRepository.findById(id);
		if(user.isPresent()) {
			String userRole =user.get().getRole();
			ArrayList<Question> allQuestions= new ArrayList<Question>();
			allQuestions=(ArrayList<Question>) questionRepository.findAllByQuestionFor(userRole);
			return allQuestions;
		}
		return null;
	}


	public ArrayList<Question> myQuestions(Integer id) {
		Optional<UserInfo> user= userInfoRepository.findById(id);
		if(user.isPresent()) {
			ArrayList<Question> allQuestions= new ArrayList<Question>();
			allQuestions=(ArrayList<Question>) questionRepository.findByUserId(id);
			return allQuestions;
		}
		return null;
	}


	public String updateQuestion(Integer userId, Integer id, String question) {
		Optional<UserInfo> user= userInfoRepository.findById(userId);
		if(user.isPresent()) {
			Optional<Question> q=questionRepository.findById(id);
			if(q.isPresent()) {
				if(user.get().getId() == q.get().getUserId()) {
					q.get().setQuestion(question);
					questionRepository.save(q.get());
					return "Question updated!";
				}
				
			}
		}
		return "Error while updating";
	}


	public String deleteQuestion(Integer userId, Integer id) {
		Optional<UserInfo> user= userInfoRepository.findById(userId);
		if(user.isPresent()) {
			Optional<Question> q=questionRepository.findById(id);
			if(q.isPresent()) {
				if(user.get().getId() == q.get().getUserId()) {
					questionRepository.deleteById(id);
					return "Question Deleted Successfully!";
				}
			}
		}
		return "Error while deleting..";
	}}