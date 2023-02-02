import "./App.css";
import { useEffect, useState } from "react";
import PodcastList from "./components/podcastList";
import getCurrentDate from "./util/getCurrentDate";
function App() {

  const [podcastList, setPodcastList] = useState(null);
  useEffect(() => {
    fetch(
      `https://nwyfxudnu3.execute-api.us-west-2.amazonaws.com/dev/podcasts?date=${getCurrentDate()}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPodcastList(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <h1 className='text-center'>Podcast Rating</h1>
      </div>
      {podcastList ? <PodcastList data={podcastList} /> : <></>}
    </div>
  );
}

export default App;
