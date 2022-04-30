package auj.helpdesk.starter.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
@Entity
public class Question {
	@Id 
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private Integer userId;
	private String userName;   
	private String userDepartment;
	private String userRole;
	private String questionFor;
	private String quesDate;
	private String question;
	@OneToMany(mappedBy = "question",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<Answer> answers=new ArrayList<>();
	
	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Question(Integer id, Integer userId, String userName, String userDepartment, String userRole,
			String questionFor, String quesDate, String question, List<Answer> answers) {
		super();
		this.id = id;
		this.userId = userId;
		this.userName = userName;
		this.userDepartment = userDepartment;
		this.userRole = userRole;
		this.questionFor = questionFor;
		this.quesDate = quesDate;
		this.question = question;
		this.answers = answers;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserDepartment() {
		return userDepartment;
	}

	public void setUserDepartment(String userDepartment) {
		this.userDepartment = userDepartment;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public String getQuestionFor() {
		return questionFor;
	}

	public void setQuestionFor(String questionFor) {
		this.questionFor = questionFor;
	}

	public String getQuesDate() {
		return quesDate;
	}

	public void setQuesDate(String quesDate) {
		this.quesDate = quesDate;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public List<Answer> getAnswers() {
		return answers;
	}

	public void setAnswers(List<Answer> answers) {
		this.answers = answers;
	}
	public void addAnswer(Answer answer) {
		this.answers.add(answer);
		answer.setQuestion(this);
	}

}
