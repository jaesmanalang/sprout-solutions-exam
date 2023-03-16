import Navbar from './components/Navbar';
import Button from './components/Button';
import FilterButton from './components/FilterButton';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import FilterableTable from './components/FilterableTable';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-2 justify-between md:mb-5 mb-10">
            <div>
              <h1 className="text-lg font-bold">Announcements</h1>
              <p>
                View, create, or edit announcements for all employee of your
                company.
              </p>
            </div>
            <div>
              <Button variant="success" icon={faPlus}>
                Post an Announcement
              </Button>
            </div>
          </div>

          <FilterableTable />
        </div>
      </main>
    </>
  );
};

export default App;
