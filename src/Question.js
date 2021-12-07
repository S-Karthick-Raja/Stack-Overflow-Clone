import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

export function Question() {
    const history = useHistory();
  return (
    <div className="QuestionInput">
      <div>
        <h3 style={{color:"grey"}}>Ask a public question</h3>
      </div>
      <div>
          <h4 style={{fontFamily:"sans-serif"}}>Title</h4>
          <p style={{color:"grey"}}>Be specific and imagine you’re asking a question to another person</p>
          <input className="TitleInput" type="text" placeholder="e.g Is there an R function for finding the index of an element in a vector ?"/>
          <h4 style={{fontFamily:"sans-serif"}}>Body</h4>
          <p style={{color:"grey"}}>Include all the information someone would need to answer your question</p>
          <textarea className="Textarea" placeholder="Ask your queries....!"></textarea>
      </div>
      <div>
      <Button style={{marginTop :"30px"}} onClick={ () => history.push("/Home")} variant="contained">Review Your Questions</Button>
      </div>
    </div>
  );
}
