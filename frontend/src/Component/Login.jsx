import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white  dark:text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Login!</h3>
          {/*email*/}
          <div className="mt-4 space-y- 2">
            <span>Email</span>
            <br></br>
            <input
              type="email"
              placeholder="enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
              {...register("email", { required: true })}
            />
            <br></br>
            {errors.email && (
              <span className="text-sm text-red-500">
                this is field is required
              </span>
            )}
          </div>
          {/*password*/}
          <div className="mt-4 space-y- 2">
            <span>Password</span>
            <br></br>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none bg-white"
              {...register("password", { required: true })}
            />
            <br></br>
            {errors.password && (
              <span className="text-sm text-red-500">
                this is field is required
              </span>
            )}
            <br></br>
          </div>
          {/*btn*/}
          <div className="flex justify-around mt-6">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              login
            </button>

            <p>
              Not registered?
              <span>
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </span>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
