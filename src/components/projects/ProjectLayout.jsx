// import { motion } from "framer-motion";
// import Link from "next/link";

// const item = {
//   hidden: { opacity: 0, y: 100 },
//   show: { opacity: 1, y: 0 },
// };


// const ProjectLayout = ({ name, description, date, demoLink }) => {
//   return (
//     <ProjectLink
//       variants={item}
//       href={demoLink}
//       target={"_blank"}
//       className=" text-sm md:text-base flex  items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
//     >
//       <div 
//       variants={item}
//       className="flex items-center justify-center space-x-2">
//         <h2 className="text-foreground">{name}</h2>
//         <p className="text-muted hidden sm:inline-block">{description}</p>
//       </div>
//       <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
//       <p className="text-muted sm:text-foreground">
//         {new Date(date).toDateString()}
//       </p>
//     </ProjectLink>
//   );
// };

// export default ProjectLayout;


import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion.div;

const ProjectLayout = ({ name, description }) => {
  return (
    <ProjectLink
      variants={item}
      className="text-sm md:text-base flex flex-col items-start justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div>
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted">{description}</p>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;

