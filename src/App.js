import "./App.css";
import Nav from "./components/nav";
import Loading from "./components/loading";
import { useEffect, useState } from "react";
import PodcastList from "./components/podcastList";
import getCurrentDate from "./util/getCurrentDate";
function App() {
  const [podcastList, setPodcastList] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://nwyfxudnu3.execute-api.us-west-2.amazonaws.com/dev/podcasts?date=${getCurrentDate()}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPodcastList(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto">
      <Nav />
      <PodcastList data={podcastList} />
    </div>
  );
}

export default App;
