import Link from "next/link";

const SignUp = () => {
  return (
    <div className="bg-blue-600">
      <div className="w1/2 bg-blue-700"></div>
      <div className="flex flex-col gap-3 bg-white w-1/2">
        <img src="/images/logo.png" alt="" width="100px" />
        <h1>Welcome Back</h1>
        <p>Welcome back, Please enter your details</p>
        <input type="text" name="" id="" placeholder="Nmae" />
        <input type="email" name="" id="" placeholder="Email" />
        <input type="password" name="" id="" placeholder="Password" />
        <input type="password" name="" id="" placeholder="Re-password" />
        <button className="btn btn-primary">Log in</button>
        <p>
          Already have account?{" "}
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
