import React from "react";

import { Card, CardActionArea, CardContent, Typography, CardMedia } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import ConstructionIcon from "@mui/icons-material/Construction";

import "./MainCard.css";

const cardDetails = {
  "About me": {
    description: "Passionate Developer with a knack for innovation.",
    icon: <PersonIcon />,
  },
  Languages: {
    description: "Proficient in JavaScript, Python, Java, C++.",
    icon: <CodeIcon />,
  },
  Frameworks: {
    description: "Experienced with React, Vue, Angular, Django.",
    icon: <ConstructionIcon />,
  },
};

const MainCard = ({ title }) => {
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 345 }} className="card-flipper">
        <CardActionArea>
          <div className="card-front">
            <CardMedia component="img" height="140" image="/path-to-your-image.jpg" alt={title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
          </div>
          <div className="card-back">
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {cardDetails[title]?.description}
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MainCard;
