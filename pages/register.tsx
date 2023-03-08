import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    isAdmin: false
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post("/api/auth/register", formData);
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <label htmlFor="username" className="block mb-2 font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="isAdmin" className="inline-flex items-center">
          <input
            type="checkbox"
            name="isAdmin"
            id="isAdmin"
            className="mr-2 rounded-full focus:outline-none focus:shadow-outline-blue"
            checked={formData.isAdmin}
            onChange={handleCheckboxChange}
          />
          <span className="text-gray-700">Register as admin</span>
        </label>
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
