import { useEffect, useState } from "react";
import OpenAI from "openai";

enum ExperienceLevel {
  Junior = "Junior",
  Senior = "Senior",
  Ligma = "Ligma",
}

function Cheat() {
  const [chatGPTApiKey, setChatGPTKey] = useState("");
  const [experience, setExperienceLevel] = useState<ExperienceLevel>(
    ExperienceLevel.Senior
  );
  const [role, setRole] = useState("JS Developer");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getQuery = () => {
    if (experience === ExperienceLevel.Ligma) {
      return `You are world renowned expert in Ligma. Interviewer asks you question. Answer with some incoherent rambling with as many buzzwords as possible and make sure to mention Ligma. Don't forget to suggest that interviewer is not smart enough to understand your answer. Always reccomend to rewrite everything in Rust. Suggest that you are the best candidate for the role. Keep it short.`;
    }
    return `You are a candidate interviewing for a role of ${role}. Interviewer ask you following question. Answer as someone at ${experience} level. Keep it short.`;
  };

  const askChatGPT = async () => {
    if (loading || !question) return;

    if (!chatGPTApiKey) {
      setAnswer("Please set ChatGPT API key.");
      return;
    }

    setLoading(true);

    try {
      const openai = new OpenAI({
        apiKey: chatGPTApiKey,
        dangerouslyAllowBrowser: true,
      });

      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: getQuery(),
          },
          { role: "user", content: question },
        ],
        model: "gpt-4o",
        temperature: experience == ExperienceLevel.Ligma ? 0.9 : 0.7,
        response_format: { type: "text" },
      });

      setAnswer(
        completion.choices[0].message.content
          ? completion.choices[0].message.content
          : ""
      );
      setError(false);
      setQuestion("");
    } catch (error: any) {
      console.log(error);
      setError(true);
      setAnswer(error);
    }
  };

  useEffect(() => {
    if (chatGPTApiKey != "") {
      localStorage.setItem("chatGPTApiKey", chatGPTApiKey);
      return;
    }

    const key = localStorage.getItem("chatGPTApiKey");
    if (key) setChatGPTKey(key);
  }, [chatGPTApiKey]);

  useEffect(() => {
    setLoading(false);
  }, [answer]);

  const getExperienceLevels = () => {
    return Object.keys(ExperienceLevel).map((key) => (
      <div key={key}>
        <div
          onClick={() =>
            setExperienceLevel(
              ExperienceLevel[key as keyof typeof ExperienceLevel]
            )
          }
          className={
            (experience === ExperienceLevel[key as keyof typeof ExperienceLevel]
              ? "text-purple-500 font-bold "
              : "text-white ") + "cursor-pointer"
          }
        >
          {ExperienceLevel[key as keyof typeof ExperienceLevel]}
        </div>
      </div>
    ));
  };

  return (
    <div className="flex flex-col gap-4 mt-10 w-[1200px] max-lg:w-80 mx-auto">
      <div className="flex max-lg:flex-col gap-6 border border-purple-500 p-6 rounded-xl">
        <div>
          <div className="text-lg my-2">Set your ChatGPT API key:</div>
          <div>
            <input
              className="text-black p-2 rounded-md text-lg w-72 max-lg:w-full"
              type="password"
              value={chatGPTApiKey}
              onChange={(e) => setChatGPTKey(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="text-lg my-2">Set interviewed role:</div>
          <div>
            <input
              className="text-black p-2 rounded-md text-lg w-72 max-lg:w-full"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="text-lg my-2">Select experience level:</div>
          <div className="flex gap-3">{getExperienceLevels()}</div>
        </div>
      </div>

      <div className="flex max-lg:flex-col justify-between items-top gap-6 border border-purple-500 p-6 rounded-xl">
        <div className="w-1/2 max-lg:w-full flex flex-col">
          <div className="text-lg">Question:</div>
          <div>
            <textarea
              className="text-black p-2 rounded-md w-full h-72 mt-3"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <button
            onClick={askChatGPT}
            className="self-end bg-gradient-to-r from-purple-600 to-purple-800 inline-block py-3 px-10 rounded-full cursor-pointer mt-3 uppercase font-bold hover:from-purple-700 hover:to-purple-900"
          >
            {loading ? "Generating..." : "Get Answer"}
          </button>
        </div>

        <div className="w-1/2  max-lg:w-full">
          <div className="text-lg">Answer:</div>
          <div>
            <textarea
              className={
                (error ? "border border-red-600 " : "border border-white ") +
                "text-black p-2 rounded-md w-full h-72 mt-3"
              }
              value={answer}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cheat;
