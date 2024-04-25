import React from "react";

import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import ConstructionIcon from "@mui/icons-material/Construction";

export const CardContent = {
  "About me": {
    content: "Passionate full-stack developer with a knack for innovation.",
    icon: <PersonIcon />,
  },
  "My skills": {
    content: "Experienced with JavaScript, C# .NET, Solidity, C/C++ and more.",
    icon: <CodeIcon />,
  },
  "Work history": {
    content: "Worked with many multi-sized projects. Did many API integrations work.",
    icon: <ConstructionIcon />,
  },
};

export const CardContentTitles = Object.keys(CardContent).map((key) => key);
