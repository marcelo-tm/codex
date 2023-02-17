import { useState } from "react";
import sendImage from "../assets/send.svg";

type InputFieldProps = {
  onSubmit: (question: string) => void;
};

export function InputField({ onSubmit }: InputFieldProps) {
  const [question, setQuestion] = useState("");

  function handleSubmitQuestion() {
    if (question) {
      onSubmit(question);
      setQuestion("");
    }
  }

  return (
    <div className="flex w-full bg-custom-gray-light rounded-md p-4 mb-4">
      <textarea
        rows={1}
        cols={1}
        placeholder="Ask Codex..."
        className="w-full resize-none bg-transparent border-none outline-none flex-1"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button type="button" onClick={handleSubmitQuestion}>
        <img src={sendImage} alt="Send question" className="h-7 w-7" />
      </button>
    </div>
  );
}
