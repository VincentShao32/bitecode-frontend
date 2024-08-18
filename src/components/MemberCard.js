import Dog from "../assets/dog-puppy-on-garden-royalty-free-image-1586966191.avif";

const MemberCard = ({ name, image, description }) => {
  return (
    <div className=" flex flex-col w-fit max-w-[310px] ">
      <img src={image} className="object-cover w-[310px] h-[300px]" />
      <div className="flex flex-col pt-2">
        {" "}
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default MemberCard;
