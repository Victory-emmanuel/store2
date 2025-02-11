/* eslint-disable react/prop-types */

const WaveDivider = ({ position = "top", className = "" }) => {
  return (
    <div
      className={`w-full overflow-hidden ${
        position === "bottom" ? "rotate-180" : ""
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-auto fill-primary dark:fill-black"
        preserveAspectRatio="none"
      >
        <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
      </svg>
    </div>
  );
};

export default WaveDivider;
