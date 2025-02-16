import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const res = await response.json();
      console.log("Response:", res);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {/* Show loading only while submitting */}
      {isSubmitting && <div>Loading...</div>}
      
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Minimum length is 3" },
              maxLength: { value: 8, message: "Maximum length is 8" },
            })}
            type="text"
          />
          {errors.username && <div className="red">{errors.username.message}</div>}
          <br />
          <input
            {...register("password", {
              minLength: { value: 7, message: "Minimum length is 7" },
            })}
            type="password"
          />
          {errors.password && <div className="red">{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
