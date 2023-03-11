import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./index.css";
import { useEffect, useState } from "react";
import { api } from "../../network/api";

function HomeFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [data, setData] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredIndex(id);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  useEffect(() => {
    api.getAll("/posts").then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="imgBox">
      <Box sx={{ width: "90%", height: "100vh" }}>
        <ImageList
          variant="masonry"
          cols={4}
          gap={40}
          className="image-wrapper"
        >
          {data?.map((item) => (
            <ImageListItem
              key={item._id}
              className="image-list-item"
              onMouseEnter={() => handleMouseEnter(item._id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className="imgs"
                src={`http://localhost:8080${item.imageUrl}?w=248&fit=crop&auto=format`}
                srcSet={`http://localhost:8080${item.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.text}
                loading="lazy"
              />
              {hoveredIndex === item._id && (
                <div className="image-overlay">
                  <p className="image-title">{item.text}</p>
                  <button className="hoverDeleteBtn">Delete</button>
                </div>
              )}
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

export default HomeFeatures;
