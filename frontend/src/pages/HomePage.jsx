import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import api from '../lib/axios';
import Navbar from '../components/Navbar';
import NoteCard from '../components/NoteCard';
import NoteNotFound from '../components/NoteNotFound';
import RateLimitedUI from '../components/RateLimitedUI';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get('/notes');
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log('Error fetching notes', error);
        if (error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error('Failed to fetch notes!');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto px-8 pt-4 pb-20 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">Loading Notes...</div>
        )}

        {!loading && notes.length === 0 && !isRateLimited && <NoteNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                setNotes={setNotes}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
