import { FaEye, FaInfo, FaStar, FaUtensils } from "react-icons/fa";
import { motion } from "framer-motion";
import { reposAnim } from "../../animation";

const ReposItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <>
      <motion.div
        className="card h-full bg-stone-900 text-stone-300 shadow-xl"
        variants={reposAnim}
        initial="hidden"
        animate="show"
      >
        <div className="card-body items-center text-center">
          <h2 className="card-title text-rose-200">{name}</h2>
          <div className="flex gap-3">
            <div className="flex gap-1 items-center text-info">
              <FaEye />
              {watchers_count}
            </div>
            <div className="flex gap-1 items-center text-warning">
              <FaStar />
              {stargazers_count}
            </div>
            <div className="flex gap-1 items-center text-error">
              <FaInfo />
              {open_issues}
            </div>
            <div className="flex gap-1 items-center text-success">
              <FaUtensils />
              {forks}
            </div>
          </div>

          <p>{description}</p>
          <div class="card-actions justify-end">
            <a href={html_url} target="_blank" rel="noreferrer">
              <button class="btn btn-ghost">Visit Repo</button>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ReposItem;
