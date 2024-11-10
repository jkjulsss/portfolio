const FlyfastCard = ({
  title = "Time is Money. FlyFast Saves You Both!",
  subtitle = "Your cheap flight deal finder with exclusive travel deals, flexible options, and live search.",
  logo = "FlyFast.io",
  showSaleBadge = true,
}) => {
  return (
    <a
      className="relative w-full bg-white dark:bg-black p-8 rounded-lg overflow-hidden"
      href="https://flyfast.io"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-green-400" />
      </div>

      {/* Sale Badge */}
      {showSaleBadge && (
        <div className="absolute top-7 -right-9 rotate-45">
          <div className="flex justify-center w-40 text-lg py-1 bg-black text-white dark:bg-white dark:text-black font-medium shadow-lg">
            NEW
          </div>
        </div>
      )}

      {/* Logo */}
      <div className="relative flex items-center space-x-2 mb-8">
        <img
          alt="Logo"
          className="w-12 h-12 dark:hidden"
          src="/FlyFast_dark.png"
        />
        <img
          alt="Logo"
          className="w-12 h-12 hidden dark:block"
          src="/FlyFast_light.png"
        />
        <span className="text-lg font-bold text-black dark:text-white">
          {logo}
        </span>
      </div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl leading-tight text-black dark:text-white">
          {title}
        </h1>
        <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
    </a>
  );
};

export default FlyfastCard;
