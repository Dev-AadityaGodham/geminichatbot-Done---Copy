import { useState } from "react";

const ChatInput = ({onSubmit})=>{
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(question.trim()){
            onSubmit(question);
            setQuestion(" ");
        }
    }
    const [question , setQuestion] = useState(" ");
    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="question" className="fs-4 fw-bold text-primary ">Ask a Question</label>
                    <input type="text" 
                    className="form-control"
                    id="question" 
                    placeholder="Enter a question" 
                    value={question} 
                    onChange={e=>setQuestion(e.target.value)} />
                </div>
                <button className="btn btn-primary mt-2" type="submit">Send</button>
            </form>
        </div>
    )
}
export default ChatInput;