import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="text-center">
        <div className="header">
          <div className="gradient">Ace AI interviews using AI</div>
          <div>HRs are getting lazy</div>
          <div>So here is a lazy solution</div>
        </div>

        <div className="mt-8 text-gray-300 mx-auto w-1/2">
          <p>You are human, you are smart, you are hardworking.</p>
          <p>
            The least you deserve is a human interviewer, but the company has
            decided that you are not worth their time. So why not use AI to ace
            the interview?
          </p>
        </div>

        <Link to={"/cheat"} className="cheat-button">
          Cheat
        </Link>
      </div>

      <div className="mx-auto mt-16 w-2/3 min-w-80 p-12 rounded-2xl flex flex-col gap-4 border border-purple-500">
        <h2 className="text-2xl">FAQ</h2>
        <div>
          <div className="font-bold">Where can I get ChatGPT key?</div>
          <div>
            At{" "}
            <a
              href="https://platform.openai.com/api-keys"
              target="blank"
              className="underline"
            >
              platform.openai.com/api-keys
            </a>
            . You need to create an account and get the key. You will also
            probably need to add a payment method.
          </div>
        </div>

        <div>
          <div className="font-bold">Is it safe to use ChatGPT key?</div>
          <div>
            Yes, the key is only stored in your browser and is not sent to any
            server. If you are still concerned, you can clone the repo and run
            the app locally.
          </div>
        </div>

        <div>
          <div className="font-bold">Is it free?</div>
          <div>
            Yes and no, the website is free to use. However, you need to have
            your own ChatGPT API key to use the app.
          </div>
        </div>

        <div>
          <div className="font-bold">How does it work?</div>
          <div>
            The app uses OpenAI's ChatGPT to generate answers to interview
            questions. The answers are generated based on the role and
            experience level you provide.
          </div>
        </div>

        <div>
          <div className="font-bold">
            Is this just a wrapper that sends prompts to ChatGPT?
          </div>
          <div>
            Yes! Just like AI interviewers. You can get prompts from code in git
            repo and ask ChatGPT directly.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
