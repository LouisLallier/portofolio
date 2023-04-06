import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className={"group relative flex cursor-pointer"}>
      <motion.img src="https://res.cloudinary.com/dpeyhfmjh/image/upload/v1680804371/production/yarn_logo_edkkp6.png" />
    </div>
  );
};

export default Skill;
