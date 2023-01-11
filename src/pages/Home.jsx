import Search from '../components/search/Search';
import Card from '../components/card/Card';

const Home = () => {

  const cards = new Array(15)
    .fill('')
    .map((_, i) => i);

    console.log(cards);

  return (
    <>
      <Search/>

    {cards.map(card => {
      return (
        <div className="row" key={card}>
        <div className="col-sm-4 mb-4">
          <Card/>
        </div>
      </div>
      )
    })}
    </>
  );
};

export default Home;