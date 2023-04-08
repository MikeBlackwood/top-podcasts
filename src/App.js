import "./App.css";
import Nav from "./components/nav";
import Loading from "./components/loading";
import { useEffect, useState } from "react";
import PodcastList from "./components/podcastList";
import getCurrentDate from "./util/getCurrentDate";
import Datepicker from "react-tailwindcss-datepicker";
function App() {
  const [podcastList, setPodcastList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState({
    startDate: getCurrentDate(),
    endDate: getCurrentDate(),
  });
  console.log(date);

  useEffect(() => {
    fetch(
      `https://nwyfxudnu3.execute-api.us-west-2.amazonaws.com/dev/podcasts?date=${date.startDate}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPodcastList(data);
        setLoading(false);
      });
  }, [date]);

  if (loading) {
    return <Loading />;
  }
  const handleValueChange = (value) => {
    setDate(value);
  };

  return (
    <div className="container mx-auto">
      <Nav />
      <Datepicker asSingle={true} value={date} onChange={handleValueChange} />
      <PodcastList data={podcastList} />
    </div>
  );
}

export default App;
