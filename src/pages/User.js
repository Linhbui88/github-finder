import { useEffect, useContext } from "react";
import { FaCodepen, FaStore, FaUserFriends, FAUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReposList from "../components/repos/ReposList";
import Spinner from "../components/layout/Spinner";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import { ImEarth } from "react-icons/im";

const User = () => {
  const { getUser, user, getUserRepos, repos, loading } =
    useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);

  const {
    name,
    email,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="user grid grid-cols-1 justify-items-center h-full w-full text-stone-900">
        <div className="bio p-1 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="avatar grid justify-items-center items-center sm:justify-items-end sm:!content-center">
            <div className="w-36 rounded-xl sm:w-56 md:w-72">
              <img src={avatar_url} />
            </div>
          </div>
          <div className="info grid grid-cols-1 justify-items-center items-start sm:justify-items-start sm:!content-center">
            <div className="mb-2 sm:mb-5">
              <div className="flex">
                <h1 className="text-xl tracking-wider font-bold sm:text-xl md:text-3xl ">
                  {name}
                </h1>
                {hireable && <div class="badge badge-success">Hireable</div>}
              </div>

              <div className="flex items-center">
                <ImEarth />
                <p className="mx-2 text-md sm:place-self-start">{location}</p>
              </div>
            </div>
            <div className=" mb-5 grid grid-rows-2 gap-2">
              <div className="flex space-x-2 w-full justify-between">
                <div>
                  <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                    <button className="btn btn-warning">Contact</button>
                  </a>
                </div>
                <div>
                  <a href={blog} target="_blank" rel="noreferrer">
                    <button className="btn btn-warning">Website</button>
                  </a>
                </div>
              </div>
              <div>
                <a href={html_url} target="_blank" rel="noreferrer">
                  <button className="btn btn-outline bg-stone-900 text-stone-300 w-full">
                    Visit Github Profile
                  </button>
                </a>
              </div>
            </div>
            <div>
              <p className="place-self-start font-semibold text-center sm:text-justify">
                {bio}
              </p>
            </div>
          </div>{" "}
        </div>
        <div className="gh-stats font-bold grid grid-cols-2 sm:grid-cols-4 h-full">
          <div className="stat flex flex-col items-center">
            <div className="stat-title">Followers</div>
            <div className="stat-value text-primary">{followers}</div>
          </div>

          <div className="stat flex flex-col items-center">
            <div className="stat-title">Following</div>
            <div className="stat-value text-secondary">{following}</div>
          </div>

          <div className="stat flex flex-col items-center">
            <div className="stat-title">Public repos</div>
            <div className="stat-value text-accent">{public_repos}</div>
          </div>
          <div className="stat flex flex-col items-center">
            <div className="stat-title">Publick gists</div>
            <div className="stat-value text-error">{public_gists}</div>
          </div>
        </div>

        <div className="repo-list">
          <ReposList repos={repos} />
        </div>
      </div>
    </>
  );
};

export default User;
