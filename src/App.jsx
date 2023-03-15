import Navbar from './components/Navbar';
import Button from './components/Button';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold mb-2">Announcements</h1>
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
        </div>
      </main>
    </>
  );
};

export default App;
