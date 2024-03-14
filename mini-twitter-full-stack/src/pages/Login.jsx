import image2 from "../assets/twitter-logo.png";

function Login() {
  return (
    <div className="flex flex-col">
      <div>
        <img src={image2} />
      </div>
      <h1>Log in to Twitter</h1>
      <button className="text-center rounded-3xl border w-[250px] h-[40px]">
        Sign up with phone or email
      </button>
      <button className="text-center rounded-3xl border w-[250px] h-[40px]">
        Sign up with phone or email
      </button>
      <button className="text-center rounded-3xl border w-[250px] h-[40px]">
        Sign up with phone or email
      </button>
      <div>
        <span className="text-blue-400 cursor-pointer pl-2">
          Forgot password?
        </span>
        <span className="text-blue-400 cursor-pointer pl-2">
          Sign up to Twitter
        </span>
      </div>
    </div>
  );
}

export default Login;
