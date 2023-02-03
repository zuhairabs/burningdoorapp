import axios from "axios";

const url = "https://theburningdoor.com/api";

export const fetcher = async (path, cb) => {
  try {
    const res = await axios.get(`${url}${path}`);
    cb();
    return res.data.data;
  } catch (err) {
    cb();
    throw err;
  }
};

export function readingTime(text) {
  const wordsPerMinute = 200;
  const numberOfWords = text?.split(" ").length;
  const readingTimeInMinutes = numberOfWords / wordsPerMinute;
  return Math.ceil(readingTimeInMinutes);
}

export function getLink(photoId) {
  return `https://theburningdoor.com/blogadmin/images/${photoId}`;
}
