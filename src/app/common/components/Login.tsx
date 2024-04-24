import React from 'react'

const LoginInp = () => {
  return (
    <div>
      <div className="grid justify-center items-center gap-5">
        <input
          className="border border-black"
          type="email"
          placeholder="Email..."
        />
        <input
          className="border border-black"
          type="password"
          placeholder="Password..."
        />
        <button className="bg-gray-500 rounded text-white px-5">Log-in</button>
      </div>
    </div>

  )
}

export default LoginInp