import "./App.css";
import Nav from "./components/nav";
import Loading from "./components/loading";
import { useEffect, useState } from "react";
import PodcastList from "./components/podcastList";
import getCurrentDate from "./util/getCurrentDate";
import Datepicker from "react-tailwindcss-datepicker";
import toast, { Toaster } from "react-hot-toast";
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

  const isValidDate = (date) => {
    const today = new Date();
    const dateToValidate = new Date(date);
    return today < dateToValidate ? false : true;
  };

  const handleValueChange = (value) => {
    const date = value.startDate.split("-");
    const formatedDate = `${date[1]}-${date[2]}-${date[0]}`;
    // check if the date is valid
    if (isValidDate(formatedDate)) {
      setDate({ startDate: formatedDate, endDate: formatedDate });
    } else {
      toast.error("Please select a valid date");
    }
  };

  return (
    <div className="container mx-auto">
      <Toaster position="bottom-center" reverseOrder={false} />
      <Nav />
      <div className="py-3">
        <Datepicker asSingle={true} value={date} onChange={handleValueChange} />
      </div>
      <PodcastList data={podcastList} />
    </div>
  );
}

export default App;
