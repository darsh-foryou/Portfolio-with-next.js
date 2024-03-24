import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";


const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          In the digital realm, I, Darshil Modi, wield the arcane crafts of JavaScript, React.js, and Next.js to sculpt seamless portals between realms of users, guided by the ancient principles of the Jamstack for swift, secure, and dynamic web experiences. My education at Syracuse University and the Dwarkadas J Sanghvi College of Engineering, coupled with real-world sorcery at PrideVel Technologies, has honed my skills in blockchain, smart contract integration, and full-stack development. Through projects like SmartMart, Buyit, and MyFund, I have demonstrated my ability to blend functionality with captivating design, continuously exploring new technologies to pioneer the future of the web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            500+ <sub className="font-semibold text-base">Users served</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
        className={" col-span-full"}>
          <p>
          Behold, now I unveil the grand tapestry of my arcane prowess.
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,css,bootstrap,js,jquery,java,cpp,py,react,redux,nextjs,threejs,nodejs,npm,tailwind,angular,aws,bash,docker,firebase,git,haskell,mongodb,powershell,solidity&perline=10`}
            alt="Darshil"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout
          className={"col-span-full "}
        >
          <p>
            Tools I use
          </p>
        </ItemLayout>


        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=vscode,pycharm,visualstudio,atom,remix,anaconda`}
            alt="Darshil"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
