import { useEffect, useState } from "react";
import ShimmerUi from "../ShimmerUI";
import MemeCard from "./Card";

const Memes = () => {
  const [memesData, setMemesData] = useState(null);
  useEffect(() => {
    fetchMemes();
  }, []);
  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const jsonData = await data.json();
    console.log(jsonData);
    setMemesData(jsonData?.memes);
  };
  console.log(memesData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {!memesData ? (
        <ShimmerUi />
      ) : (
        memesData?.map((m, i) => (
          <div key={i}>
            <MemeCard author={m.author} src={m.url} />
          </div>
        ))
      )}
    </div>
  );
};
export default Memes;
