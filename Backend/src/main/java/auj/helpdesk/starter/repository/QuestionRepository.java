package auj.helpdesk.starter.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import auj.helpdesk.starter.model.Question;

public interface QuestionRepository extends CrudRepository<Question, Integer> {
	public List<Question> findAllByQuestionFor(String questionFor);
	public List<Question> findByUserId(Integer userId);
	
}
