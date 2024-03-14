import image1 from "../assets/back-twitter 1.png";
import image2 from "../assets/twitter-logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function SignUp() {
  return (
    <div className="flex flex-col w-full h-[100vh]">
      <div className="flex w-full h-[90vh]">
        <div className="h-full w-[55%]">
          <img className="h-full w-full" src={image1} />
        </div>
        <div className="flex flex-col gap-6 w-[45%] h-full justify-center px-[3%]">
          <div>
            <img src={image2} />
          </div>
          <h1 className="font-bold text-[45px]">Happening Now</h1>
          <h2 className="font-bold text-2xl">Join Twitter Today</h2>
          <div className="flex-col flex gap-4">
            <button className="flex items-center justify-center rounded-3xl border w-[250px] h-[40px] gap-2">
              <FcGoogle />
              <p>Sign up with Google</p>
            </button>
            <button className="flex items-center justify-center rounded-3xl border w-[250px] h-[40px] gap-2">
              <FaApple />
              <p>Sign up with Apple</p>
            </button>
            <button className="text-center rounded-3xl border w-[250px] h-[40px]">
              Sign up with phone or email
            </button>
          </div>
          <div>
            <p className="text-sm">
              By singing up you agree to the
              <span className="text-blue-400 cursor-pointer px-2">
                Terms of Service
              </span>
              and
              <span className="text-blue-400 cursor-pointer px-2">
                Privacy Policy,
              </span>
              including
              <span className="text-blue-400 cursor-pointer px-2">
                Cookie Use
              </span>
            </p>
            <p className="pt-4">
              Already have an account?
              <span className="text-blue-400 cursor-pointer pl-2">Log in</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[10vh] items-center justify-center gap-2">
        <p>About</p>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Ads info</p>
        <p>Blog</p>
        <p>Status</p>
        <p>Carrres</p>
        <p>Brand Resources</p>
        <p>Advertising</p>
        <p>Marketing</p>
        <p>Twitter for Business</p>
        <p>Developers</p>
        <p>Directory</p>
        <p>Settings</p>
        <p>© 2021 Twitter,Inc.</p>
      </div>
    </div>
  );
}

export default SignUp;
