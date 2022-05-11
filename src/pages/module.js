import React from 'react';
import { Auth, API } from 'aws-amplify';
import { useNavigate } from "react-router-dom";
import { ProgressBar} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ModulePlayer from '../components/ModulePlayer';
import Quiz from '../components/Quiz';



const Module = ({apiName}) => {



async function signOut() {
    try {
        await Auth.signOut().then( (r) => 
        navigate("/")
        )
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
let navigate = useNavigate();

const [profile, setProfile] = React.useState("");
const [answers, setAnswers] = React.useState("");
const [correctAnswer, setCorrectAnswer] = React.useState("");
const [question, setQuestion] = React.useState("");
const [nextModule, setNextModule] = React.useState(0);
const [visible, setVisible] = React.useState("0")

React.useEffect(() => {
    const fetchModule = async () => {
    const user = await Auth.currentAuthenticatedUser();
    let p = await API.get(apiName,"/user/"+user.username ,{})
    let path = "/module/"+p.currentModule
    console.log(path)
    let mod = await API.get(apiName, path,{})
    setProfile(p);
    setAnswers(mod.answers)
    setCorrectAnswer(mod.correctAnswer)
    setQuestion(mod.question)
    console.log(question)
    setVisible("0")

    //let mod = await API.get(apiname,"/module/"+p.currentModule, {})
    //setAnswers(mod);
    console.log("we noticed a change")
    };  
  fetchModule();

}, [nextModule]);



let url = "https://creditskinnymodules.s3.us-east-1.amazonaws.com/module"+profile.currentModule+".mp4"

  return answers != "" && visible != "0"? (
    <>
    <Container>
    <Row className = "mx-auto">
    <Col md={3}></Col>
    <Col md={6}>
    <h2>Module {profile.currentModule}</h2><br></br>

    <ModulePlayer source={url}/><br></br>
    
    <Quiz setVisible={setVisible} question={question} profile={profile} apiName={apiName} answers={answers} userAnswer={answers[0]} correctAnswer={correctAnswer} step="1" nextModule={nextModule} setNextModule={setNextModule} />

    </Col>
    <Col md={3}></Col>

    </Row>
    </Container>
    <div>


        <div className="d-grid gap-2">
    <Button variant="outline-primary" size="lg" onClick={() => setVisible("1")}>
        Take Quiz
    </Button>
    <Button variant="outline-secondary" size="lg">
        Current Learning Module
    </Button>
    <Button
        variant="outline-info" size="lg"
        
        >
        Edit Profile
  </Button>
  <Button
        variant="outline-success" size="lg"
        onClick={() => signOut()}
        >
        Sign Out
  </Button>
</div>


    </div>
    </>
  ):(<>
    <Container>
    <Row className = "mx-auto">
    <Col md={3}></Col>
    <Col md={6}>
    <h2>Module {profile.currentModule}</h2><br></br>

    <ModulePlayer source={url}/><br></br>
    

    </Col>
    <Col md={3}></Col>

    </Row>
    </Container>
    <div>


        <div className="d-grid gap-2">
    <Button variant="outline-primary" size="lg" onClick={() => setVisible("1")}>
        Take Quiz
    </Button>
    <Button
        variant="outline-info" size="lg"
        onClick={() => navigate("/profile")}
        >
        Go back to Profile
  </Button>
  <Button
        variant="outline-success" size="lg"
        onClick={() => signOut()}
        >
        Sign Out
  </Button>
</div>


    </div>
    </>)   
};

export default Module;