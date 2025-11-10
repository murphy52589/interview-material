import { useEffect, useState } from "react";

function Starter() {
  interface Question {
    id: number;
    word: string;
    choices: {
      value: string;
      label: string;
    }[];
    correctChoice: string;
  }
  const [questions, setQuestions] = useState<Question[]>([]);
  const [questionResponses, setQuestionResponses] = useState<
    {
      id: number;
      response: string;
    }[]
  >([]);

  useEffect(() => {
    async function getData() {
      const url =
        "https://gist.githubusercontent.com/ttoomey/c8b14270e076165a97ff0f4e3ee251d3/raw/a8cae64d64b4e477490ac907503ec03d6cfd2ce4/questions.json";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        setQuestions(result);
        console.log(result);
      } catch (error) {
        setQuestions([]);
        console.error(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <div>
        <div>Progress Bar:</div>
        <div>Progress Number</div>
      </div>
      <div>
        {questions.map((question) => (
          <>
            <p>Define Word {question.word}</p>
            <ul key={question.id}>
              {question.choices.map((choice) => (
                <>
                  <label>
                    <input
                      type="radio"
                      name="fruit"
                      value={choice.label}
                      checked={s}
                      // checked={selectedFruit === "banana"}
                      // onChange={handleChange}
                    />
                    {choice.label}
                  </label>
                  <br />
                </>
              ))}
            </ul>
          </>
        ))}
      </div>
      <div>
        {questions.map((question) => (
          <li>{question.word}</li>
        ))}
      </div>
    </>
  );
}

export default Starter;

/* 
Instructions
1. Implement a quiz form. The form should display questions from a remote source. The primary focus of this exercise is functionality, styling is a secondary concern. ✅ 
2. Load the quiz questions array from this url ✅
3. Implement a UI that allows the user to answer each question. Users should be able to select from among the question’s choices using HTML radio inputs. The display should be similar to the example interface below.
4. When a user selects a choice, the progress bar is updated to reflect the number of questions answered.
5. When the submit button is pressed, compare the user's choice to the correct choice for each question. Then update the display to show a score such as "1 out of 3 correct"
*/