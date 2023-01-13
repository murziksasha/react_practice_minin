import { useContext } from 'react';
import Search from '../components/search/Search';
import Card from '../components/card/Card';
import { GithubContext } from '../context/github/githubcontext';

const Home = () => {

  const {loading, users} = useContext(GithubContext);

  return (
    <>
      <Search/>

      <div className="row">
        {
          loading ? <p className='text-center'>Loading...</p>
          : users.map(user => {
            return (
              <div className="row" key={user.id}>
              <div className="col-sm-4 mb-4">
                <Card user={user}/>
              </div>
            </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Home;