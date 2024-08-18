import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Help from "pages/Help";
import Signinfilled from "pages/Signinfilled";
import Home1 from "pages/Home1";
import HomeOne from "pages/HomeOne";
import Video from "pages/Video";
import Library from "pages/Library";
import Assessment from "pages/Assessment";
import Assessmentsaved from "pages/Assessmentsaved";
import Profile from "pages/Profile";
import HelpOne from "pages/HelpOne";
import AIchatbot from "pages/AIchatbot";
import Storytelling from "pages/Storytelling";
import StorytellingOne from "pages/StorytellingOne";
import Aboutcourse from "pages/Aboutcourse";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "help",
      element: <Help />,
    },
    {
      path: "signinfilled",
      element: <Signinfilled />,
    },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "homeone",
      element: <HomeOne />,
    },
    {
      path: "video",
      element: <Video />,
    },
    {
      path: "library",
      element: <Library />,
    },
    {
      path: "assessment",
      element: <Assessment />,
    },
    {
      path: "assessmentsaved",
      element: <Assessmentsaved />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "helpone",
      element: <HelpOne />,
    },
    {
      path: "aichatbot",
      element: <AIchatbot />,
    },
    {
      path: "storytelling",
      element: <Storytelling />,
    },
    {
      path: "storytellingone",
      element: <StorytellingOne />,
    },
    {
      path: "aboutcourse",
      element: <Aboutcourse />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
