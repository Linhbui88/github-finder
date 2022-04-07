import React from "react";
import ReposItem from "./ReposItem";

const ReposList = ({ repos }) => {
  console.log(repos);
  return (
    <div className="flex flex-col w-full items-center">
      <h1 className="text-3xl">Lastest Repositories</h1>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 gap-5 md:grid-cols-3 gap-5">
        {repos.map((repo) => (
          <ReposItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default ReposList;
