import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const nav = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3001/auth/api/login",
        form,
        { withCredentials: true }
      );
      setMessage(response.data.message);

      if(response.status == 200){
        nav("/dashboard")
      }
    } catch (error: any) {
      setMessage(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  console.log(message);

  return (
    <div className="flex flex-col justify-center items-center h-screen border-2">
      <div className="flex flex-col border p-4 rounded-lg shadow-2xl">
        <div className="mb-4 text-3xl font-bold text-center font-mono">
          Login
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@gmail.com"
            className="border rounded-lg p-2 w-[300px]"
            disabled={loading}
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="A strong Password"
            className="border rounded-lg p-2 mt-2 w-[300px]"
            disabled={loading}
          />
          <button
            className="w-[300px] p-2 bg-blue-600 rounded-lg mt-2 text-white hover:bg-blue-700"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <div>
                <div role="status" className="flex justify-center items-center w-full">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-100 fill-blue-700"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div>Submit</div>
            )}
          </button>
        </form>
        <div className="text-xs flex justify-end mt-1">
          Don&apos;t have an account?{" "}
          <a rel="stylesheet" href="/register" className="ml-1 text-blue-500">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
