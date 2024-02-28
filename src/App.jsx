import ProjectOverview from "./components/Sidebar/ProjectOverview/ProjectOverview";
import ProjectBoard from "./components/Sidebar/ProjectBoard/ProjectBoard";
import Input from "./components/Sidebar/Input/Input";
function App() {
  return (
    <>
      <main>
        <ProjectBoard />
        <Input />
        {/* <ProjectOverview /> */}
      </main>
    </>
  );
}

export default App;
