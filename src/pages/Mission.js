import Splash from "../components/Splash";
import Logo from "../components/Logo";

const Mission = () => {
  return (
    <div>
      <Logo color="white" />
      <Splash text="Our Mission" />
      <div className="flex flex-col max-w-[1000px] w-full mx-auto px-8 py-8 gap-4">
        <h1 className="font-bold text-5xl text-center">Mission Statement</h1>
        <p className="text-lg leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra
          orci a felis sodales, rutrum aliquet elit placerat. Integer efficitur
          tincidunt libero, quis elementum neque elementum vel. Quisque eleifend
          varius arcu, vitae mollis sapien egestas in. Donec non mauris sed
          magna suscipit fermentum. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Mauris condimentum lorem
          sapien, ac fermentum ipsum placerat vitae. Ut ullamcorper ut sapien id
          mollis. Nulla viverra vulputate odio quis ornare. Etiam placerat eros
          vel justo tincidunt, nec faucibus nisi hendrerit. Vivamus nec
          tincidunt urna. Etiam viverra congue congue. In sodales, ante quis
          rutrum dignissim, risus orci sollicitudin massa, ut vestibulum odio
          dolor sed neque. Curabitur id sagittis purus. In sodales pulvinar
          efficitur. Nulla mattis rutrum fermentum. Phasellus porta, leo vel
          iaculis pretium, elit libero finibus lorem, fermentum scelerisque nisi
          quam eu nisi. Maecenas eget nulla urna. Aenean tristique vel massa non
          mattis. Pellentesque elit eros, malesuada et bibendum ac, auctor in
          turpis. Proin quis enim est. Duis eu lorem consequat, lobortis libero
          a, aliquam ex. Mauris quis nunc quis risus accumsan ullamcorper. Duis
          ullamcorper consectetur elementum. Duis turpis nisi, bibendum non
          vestibulum ut, pulvinar non nisl. Suspendisse fringilla urna id ligula
          gravida pellentesque. Maecenas condimentum, metus at tristique
          pellentesque, ligula lorem sollicitudin nibh, a interdum augue augue
          sit amet ligula. Mauris volutpat imperdiet tellus, eget egestas sapien
          posuere sed.
        </p>
      </div>
    </div>
  );
};

export default Mission;
