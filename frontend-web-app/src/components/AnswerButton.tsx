import React from "react";

type AnswerButtonProps = {
  answer: string; // Replace `string` with the appropriate type if needed
  answerKey: string ; 
  correctAnswerKey: string; // Replace `string` with the appropriate type
  handleClick: (answerKey: string, correctAnswerKey: string) => void; // Function type for the click handler
  children: React.ReactNode; // For JSX children
};

const AnswerButton: React.FC<AnswerButtonProps> = ({ answer, answerKey, correctAnswerKey, handleClick, children }) => {
  


    return (
    <button className="text-left ml-8 hover:bg-blue-200 rounded-lg" onClick={() => handleClick(answerKey, correctAnswerKey)}>
      {children}) {answer}
    </button>
  );
};

export default AnswerButton;
