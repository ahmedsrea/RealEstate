import Why from "./Why";
import Landing from "./Landing";
import FeaLocations from "./FeaLocations";
import LatestUpdates from "./LatestUpdates";
import FeaProjects from "./FeaProjects";

const Home = () => {
  return (
    <>
      <Landing />
      <FeaLocations />
      <FeaProjects />
      <LatestUpdates />
      <Why />
    </>
  );
};

export default Home;
