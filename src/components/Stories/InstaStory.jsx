import { useStore } from "framework7-react";
import React from "react";
import Stories from "react-insta-stories";

export const InstaStory = ({ closeRef }) => {
  const stories = useStore("getStories");
  const currentStory = useStore("getCurrentStory");

  const currentStorryArray = stories[currentStory];

  return (
    <Stories
      loop
      width="99.9%"
      height="100%"
      keyboardNavigation
      defaultInterval={4000}
      stories={currentStorryArray.data}
      onAllStoriesEnd={() => closeRef.current.el.click()}
    />
  );
};
