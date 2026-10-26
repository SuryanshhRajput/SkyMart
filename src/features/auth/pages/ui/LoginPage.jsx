
import { useAuth } from "../../hooks/useAuthHook";

const Login = () => {
  let { navigate, handleSubmit, register, loginForm } = useAuth();

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white lg:grid lg:grid-cols-2">
      {/* Left branding panel */}
      <section className="relative hidden min-h-screen flex-col justify-between overflow-hidden border-r border-white/20 bg-[#101010] p-10 lg:flex xl:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_45%,rgba(204,255,0,0.09),transparent_45%)]" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ccff00] text-xl font-bold text-black">
            ↯
          </div>
          <span className="text-xl font-bold tracking-tight">
            Sky<span className="text-[#ccff00]">Mart</span>
          </span>
        </div>

        <div className="relative max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#ccff00]">
            Welcome back
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
            Shop the future.
            <br />
            <span className="text-[#ccff00]">Today.</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
            Thousands of products, lightning-fast delivery, and
            prices that make your wallet happy.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {[
              { value: "20K+", label: "Products" },
              { value: "50K+", label: "Users" },
              { value: "4.9★", label: "Rating" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/70 px-2 py-5 text-center"
              >
                <p className="text-lg font-bold text-[#ccff00]">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="relative text-xs text-neutral-600">
          Your next favourite thing is just a click away.
        </p>
      </section>

      {/* Right login panel */}
      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10">
        <div className="w-full max-w-md">
          {/* Mobile branding */}
          <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ccff00] text-xl font-bold text-black">
              ↯
            </div>
            <span className="text-xl font-bold">
              Sky<span className="text-[#ccff00]">Mart</span>
            </span>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-[#111111] p-6 shadow-2xl sm:p-7">
            <h2 className="text-2xl font-semibold tracking-tight">
              Sign in
            </h2>
            <p className="mt-1 text-xs text-neutral-500">
              Enter your credentials to continue
            </p>

            <form
              onSubmit={handleSubmit(loginForm)}
              className="mt-7 space-y-3.5"
            >
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="✉   Email address"
                  aria-label="Email address"
                  className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]/30"
                />
              </div>

              <div>
                <div className="relative">
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="♙   Password"
                    aria-label="Password"
                    className="w-full rounded-xl border border-white/10 bg-[#222222] px-4 py-3.5 pr-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#ccff00] py-3.5 text-sm font-semibold text-black transition hover:bg-[#b9e800] active:scale-[0.99]"
              >
                Sign in
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-neutral-500">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="font-semibold text-[#ccff00] transition hover:text-white"
              >
                Create one
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
