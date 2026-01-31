import React, { useState } from "react";

function Welcome() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  return (
    <div className="flex flex-col p-12 gap-5">
      <input
        type="text"
        placeholder="نام"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="سن"
        onChange={(e) =>
          setAge(e.target.value === "" ? "" : Number(e.target.value))
        }
      />
      <button
        onClick={() =>
          alert(`Hey ${name || ""}! your age is ${age || "wrong"}.`)
        }
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-2"
      >
        Submit
      </button>
    </div>
  );
}

export default Welcome;
