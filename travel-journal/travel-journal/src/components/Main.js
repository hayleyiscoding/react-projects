import Article from "./Article.js";
import journalData from "../journalData.js";

export default function Main() {
  return (
    <main className='container main'>
      {journalData.map((e) => {
        return (
          <Article
            title={e.title}
            description={e.description}
            location={e.location}
            googleMapsUrl={e.googleMapsUrl}
            startDate={e.startDate}
            endDate={e.endDate}
            imageUrl={e.imageUrl}
          />
        );
      })}
    </main>
  );
}
