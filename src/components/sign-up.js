import myEngineering from "./images/my-engineering.png";

function SignUp() {
  return (
    <div className="sign-up-page">
      <div className="header-sign-up">
        <div className="header-text-sign-up">
        Sign Up to be a 2024-2025 mentorSEAS Mentor!
        </div>
      </div>
      <div className="subheader-sign-up">
        ** applications will become available April 2024
      </div>
      <div className="hstack-sign-up">
        <div className="vstack-sign-up">
        <div className="sign-up-info-header">How do I sign up?</div>
      <div className="sign-up-info-subheader">It's super easy!</div>
          <text className="text-sign-up">
            1. Start by logging into your myEngineering account. Go to the
            "About Me" section as shown in the image.
          </text>
          <text className="text-sign-up">
            2. If the application period is open, there will be a "Mentor
            Profile" section. Fill in the information, agree to the agreements
            and click "Sign up to be a mentor".
          </text>
          <text className="text-sign-up">
            3. Fill out the accompanying Mentee Matching survey, linked in
            myEngineering.
          </text>
        </div>
        <img className="my-engr-image" src={myEngineering} />
        </div>
        <div className="bottom-text-sign-up">Once you've completed the steps above, you're all set!</div>
    </div>
  );
}

export default SignUp;
