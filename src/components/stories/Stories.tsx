import { FC } from "react";
import { StoryType } from "../../types/types";
import "./stories.scss";
import storyImg from "./../../assets/login.jpeg";

const Stories: FC = () => {
  const stories: StoryType[] = [
    {
      id: 1,
      name: "Иван Иванов",
      img: storyImg,
    },
    {
      id: 2,
      name: "Иван Иванов",
      img: storyImg,
    },
    {
      id: 3,
      name: "Иван Иванов",
      img: storyImg,
    },
    {
      id: 4,
      name: "Иван Иванов",
      img: storyImg,
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={stories[0].img} alt={`story of ${stories[0].name}`} />
        <span>{stories[0].name}</span>
        <button>+</button>
      </div>

      {stories.map((story: StoryType) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt={`story of ${story.name}`} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
