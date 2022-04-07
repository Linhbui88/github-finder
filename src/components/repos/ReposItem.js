import { FaEye, FaInfo, FaStar, FaUtensils } from "react-icons/fa";

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
      <div class="card h-full bg-stone-900 text-stone-300 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-rose-200">{name}</h2>
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
            <button class="btn btn-ghost">Visit Repo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReposItem;
