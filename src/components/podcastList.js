import { Suspense } from "react";
import PodcastCard from "./podcastCard";

const PodcastList = ({ data }) => {
  const renderList = data.map((data) => (
    <Suspense fallback={<div>Loading</div>}>
      <PodcastCard
        link={data.link}
        thumbnail={data.thumbnail}
        title={data.title}
        production={data.production}
        rank={data.rank}
      />
    </Suspense>
  ));
  return (
    <div
      className="grid
  xlg:grid-cols-4
  lg:grid-cols-3
  md:grid-cols-2
  grid-cols-1
  gap-3"
    >
      {renderList}
    </div>
  );
};

export default PodcastList;
