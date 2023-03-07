import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdmin: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (res.status === 200) {
      const { token } = await res.json();
      localStorage.setItem('token', token);
      router.push('/');
    } else {
      const { message } = await res.json();
      alert(message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="isAdmin">Login as Admin:</label>
          <input
            type="checkbox"
            name="isAdmin"
            id="isAdmin"
            checked={formData.isAdmin}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
