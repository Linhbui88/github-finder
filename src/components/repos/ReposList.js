import React from "react";
import ReposItem from "./ReposItem";
import { motion } from "framer-motion";
import { reposListAnim } from "../../animation";

const ReposList = ({ repos }) => {
  console.log(repos);
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-3xl mb-3 font-bold">Lastest Repositories</h1>
      <motion.div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 gap-5 md:grid-cols-3 gap-5"
        variants={reposListAnim}
        initial="hidden"
        animate="show"
      >
        {repos.map((repo) => (
          <ReposItem key={repo.id} repo={repo} />
        ))}
      </motion.div>
    </div>
  );
};

export default ReposList;
