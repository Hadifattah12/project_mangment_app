import NewProject         from "./components/NewProject.jsx";
import NoProjectSelected  from "./components/NoProjectSelected.jsx";
import ProjectsSidebar    from "./components/projectsSidebar.jsx";
import { useState }       from 'react';
import SelectedProject    from "./components/SelectedProject.jsx";


function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddTask(text) {
    setProjectsState(prevState => ({
      ...prevState,
      projects: prevState.projects.map(project => {
        if(project.id === prevState.selectedProjectId){
          const newTask = {id: Math.random(),text};
          return {
            ...project,
            tasks: [newTask, ...project.tasks]
          };
        }
        return project;
      })
    }));
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => ({
      ...prevState,
      projects: prevState.projects.map(project => {
        if (project.id === prevState.selectedProjectId) {
          return {
            ...project,
            tasks: project.tasks.filter(task => task.id !== id)
          };
        }
        return project;
      })
    }));
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
        tasks: [],
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsState.projects.find(project =>
    project.id === projectsState.selectedProjectId);

  const tasks = selectedProject ? selectedProject.tasks : [];
  let content = <SelectedProject
    project={selectedProject}
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={tasks}
  />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId} 
        />
      {content}
    </main>
  );
}

export default App;
