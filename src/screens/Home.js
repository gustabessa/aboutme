import Profile from "../components/profile/Profile";
import Projects from "../components/projects/Projects";
import Technologies from "../components/technologies/Technologies";
import Jobs from "../components/jobs/Jobs"

function Home() {
  return (
    <>
      <Profile />
      <Technologies />
      <Projects />
      <Jobs />
    </>
  );
}

export default Home;