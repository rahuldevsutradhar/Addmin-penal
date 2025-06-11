import React from 'react'
import Container from '../components/Container'

const Login = () => {
  return (
    <section>
        <Container>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 sm:w-full md:w-full max-w-md">
        <h2 className="text-lg font-semibold font-open text-center text-gray-600 mb-6">
          Sign In To Admin
        </h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg focus:outline-none bg-gray-100 shadow-md focus:ring-2 focus:ring-blue-200"
              
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 rounded-lg focus:outline-none bg-gray-100 shadow-md focus:ring-2 focus:ring-blue-200"
              
            />
          </div>

          <div className="text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  

        </Container>
    </section>
  )
}

export default Login