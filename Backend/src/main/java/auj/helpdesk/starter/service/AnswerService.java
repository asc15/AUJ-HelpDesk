package auj.helpdesk.starter.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import auj.helpdesk.starter.model.Answer;
import auj.helpdesk.starter.model.Question;
import auj.helpdesk.starter.model.UserInfo;
import auj.helpdesk.starter.repository.AnswerRepository;
import auj.helpdesk.starter.repository.QuestionRepository;
import auj.helpdesk.starter.repository.UserInfoRepository;

@Service
public class AnswerService{
	@Autowired
	UserInfoRepository userInfoRepository;
	@Autowired
	QuestionRepository questionRepository;
	@Autowired
	AnswerRepository answerRepository;
	
	public String postAnswer(Integer uId, Integer qId, Answer answer) {
		Optional<UserInfo> user= userInfoRepository.findById(uId);
		System.out.println("corrent user"+user.get());
		if(user.isPresent()) {
			Optional<Question> q=questionRepository.findById(qId);
			System.out.println("corrent q"+q.get());
			if(q.isPresent()) {
				q.get().addAnswer(answer);
				questionRepository.save(q.get());
				return "Answer Posted Successfully";
			}
	}
		return "Error,Something Wrong !";
	
}
}