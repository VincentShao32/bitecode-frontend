import Logo from "../components/Logo";
import Splash from "../components/Splash";
import MemberCard from "../components/MemberCard";

import Dog from "../assets/dog-puppy-on-garden-royalty-free-image-1586966191.avif";

const Team = () => {
  return (
    <div className="">
      <Logo color="white" />
      <Splash text="Meet Our Team" />
      <div className="px-20 py-8 flex flex-col gap-4">
        <div className="mx-auto max-w-[1000px] w-full flex flex-col gap-4">
          <h1 className="text-center font-bold text-4xl">Lorem Ipsum</h1>
          <p className="text-justify text-lg leading-loose">
            Quick statement about who we are, why we want to help, etc. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            dapibus justo, vitae consequat mauris vehicula nec. Vestibulum orci
            tellus, tempus nec pellentesque et, convallis sed nulla.{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-8 max-w-[1000px] h-fit w-full mx-auto">
          <MemberCard
            image={Dog}
            name="Scout"
            description="Scout is a very good boy studying osteology at the University of
          Retrievers in Dogland. He is dedicated to using his skills to help
          small businesses in need."
          />
          <MemberCard
            image={Dog}
            name="Scout"
            description="Scout is a very good boy studying osteology at the University of
          Retrievers in Dogland. He is dedicated to using his skills to help
          small businesses in need."
          />
          <MemberCard
            image={Dog}
            name="Scout"
            description="Scout is a very good boy studying osteology at the University of
          Retrievers in Dogland. He is dedicated to using his skills to help
          small businesses in need."
          />
          <MemberCard
            image={Dog}
            name="Scout"
            description="Scout is a very good boy studying osteology at the University of
          Retrievers in Dogland. He is dedicated to using his skills to help
          small businesses in need."
          />
          <MemberCard
            image={Dog}
            name="Scout"
            description="Scout is a very good boy studying osteology at the University of
          Retrievers in Dogland. He is dedicated to using his skills to help
          small businesses in need."
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
