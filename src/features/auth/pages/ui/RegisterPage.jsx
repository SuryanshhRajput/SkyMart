
import { useAuth } from "../../hooks/useAuthHook";

const Register = () => {
  let { navigate, register, handleSubmit, errors, registerForm } = useAuth();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b0b0b] px-5 py-10 text-white">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ccff00]/[0.025] blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Brand */}
        <div className="mb-7 flex items-center justify-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ccff00] text-xl font-bold text-black">
            ↯
          </div>

          <span className="text-xl font-bold tracking-tight">
            Sky<span className="text-[#ccff00]">Mart</span>
          </span>
        </div>

        {/* Registration card */}
        <div className="rounded-[22px] border border-white/10 bg-[#111111] p-6 shadow-2xl sm:p-7">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create account
          </h1>

          <p className="mt-1 text-xs text-neutral-500">
            Join SkyMart and start shopping
          </p>

          <form
            onSubmit={handleSubmit(registerForm)}
            className="mt-7 space-y-3.5"
          >
            {/* Name */}
            <div>
              <input
                {...register("name", {
                  required: "name is required",
                })}
                type="text"
                placeholder="♙   Full name"
                aria-label="Full name"
                className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]/30"
              />

              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email", {
                  required: "email is required",
                })}
                type="email"
                placeholder="✉   Email address"
                aria-label="Email address"
                className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]/30"
              />

              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                {...register("password")}
                type="password"
                placeholder="♙   Password"
                aria-label="Password"
                className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]/30"
              />
            </div>

            {/* Create account */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#ccff00] py-3.5 text-sm font-semibold text-black transition hover:bg-[#b9e800] active:scale-[0.99]"
            >
              Create Account
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-neutral-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-semibold text-[#ccff00] transition hover:text-white"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
