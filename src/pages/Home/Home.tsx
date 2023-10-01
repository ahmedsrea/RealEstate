import Why from "./Why";
import Landing from "./Landing";
import FeaLocations from "./FeaLocations";
import LatestUpdates from "./LatestUpdates";
import FeaProjects from "./FeaProjects";
import FeaDevs from "./FeaDevs";

const Home = () => {
  return (
    <>
      <Landing />
      <FeaLocations />
      <FeaProjects />
      <FeaDevs />
      <LatestUpdates />
      <Why />
    </>
  );
};

export default Home;
