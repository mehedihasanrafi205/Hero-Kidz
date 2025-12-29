import Logo from "@/components/layout/Logo";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-100">
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full"></div>
          <div className="relative animate-pulse scale-110">
            <Logo />
          </div>
        </div>

        <span className="loading loading-ring loading-md text-primary"></span>

        <p className="text-base-content/70 text-sm tracking-wide">
          Loading, please wait…
        </p>
      </div>
    </div>
  );
};

export default Loading;
