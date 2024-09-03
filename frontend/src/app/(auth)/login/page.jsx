import Link from "next/link";

const SignIn = () => {
  return (
    <div className="bg-blue-600">
      <div className="bg-white flex flex-col gap-3 w-1/2">
        <img src="/images/logo.png" alt="" />
        <h1>Welcome Back</h1>
        <p>Welcome back, Please enter your details</p>
        <input type="email" name="" id="" placeholder="Email" />
        <input type="password" name="" id="" placeholder="Password" />
        <button className="btn btn-primary">Log in</button>
        <p>Don't have acount?</p>
        <Link href="/signup" className="text-blue-500">SignUp</Link>
      </div>
      {/* <div className="w-1/2"></div> */}
    </div>
  );
};

export default SignIn;
