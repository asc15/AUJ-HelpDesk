import axios from "axios";
const BASE_URL="http://localhost:8090";
class Services
{
    registerUser(user){
       return axios.post(`${BASE_URL}/register`,user);
       //console.log(user);
    }
    getProfile(id){
        return axios.get(`${BASE_URL}/user/${id}/profile`);
    }
    login(email,password)
    {
        console.log("inside loginnnnnn fn");
    
        return axios.post(`${BASE_URL}/login`,{
                "email":email,
                "password":password
            
        });
    }
    changePassword(changePasswordDetails,id)
    {
        console.log("inside change")
        return axios.post(`${BASE_URL}/user/${id}/profile/changepassword`,changePasswordDetails)
    }
    postQuestion(askQuestion,id)
    {
        console.log("inside ask question")
        return axios.post(`${BASE_URL}/askquestion/${id}/post`,askQuestion)
    }
    getAllQuestions( id){
        console.log("inside get all question");
        return axios.get(`${BASE_URL}/${id}/allquestion`)
    }
    getMyQuestions(id){
        console.log("inside get all question");
        return axios.get(`${BASE_URL}/${id}/myquestion`)
    }
    updateQuestion(userId,id,question){
        console.log("inside update my question");
        return axios.put(`${BASE_URL}/${userId}/updatequestion/${id}`,{question})
    }
    deleteQuestion(userId,id){
        console.log("inside delete my question");
        return axios.delete(`${BASE_URL}/${userId}/deletequestion/${id}`)
    }
    answerQuestion(uid,qid,answer){
        console.log("inside answer question")
        return axios.post(`${BASE_URL}/answer/${uid}/question/${qid}`,answer)
    }
}
export default new Services();