import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";

export default function Login() {
  const { loginUser, setUser, googleProvider } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  // handleGoogleProvider
  const handleGoogleProvider = () => {
    googleProvider()
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // handleLogin
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   loginUser(email, password)
  //     .then((res) => {
  //       setUser(res.user);
  //       console.log(res.user)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // };
  return (
    <div className="py-10 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <input
                  type="checkbox"
                  id="show-password"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-2"
                />
                <label
                  htmlFor="show-password"
                  className="text-sm text-gray-600"
                >
                  Show Password
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline focus:outline-none"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            LOGIN
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Don,t have an account?
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
