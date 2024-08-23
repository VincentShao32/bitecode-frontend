const GradientCircle = ({ VPosition, HPosition, gradient }) => {
  return (
    <div
      className={`${gradient} rounded-full w-[1100px] h-[1100px] absolute ${VPosition} ${HPosition} -z-10`}
    ></div>
  );
};

export default GradientCircle;
