import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { LoaderCircleIcon, ArrowLeftIcon, Trash2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../lib/axios';

const UpdatePage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log('Error fetching note: ', error);
        if (error.response.status === 429) {
          toast.error(
            "Slow down! You're sending too many fetch note requests",
            {
              duration: 4000,
              icon: '⚠',
            }
          );
        } else {
          toast.error('Failed to fetch note!');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNote(id);
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this note?')) {
      return;
    }

    try {
      await api.delete(`/notes/${id}`);
      toast.success('Note deleted successfully');
      navigate('/');
    } catch (error) {
      console.log('Error deleting the note: ', error);
      toast.error('Failed to delete note');
    }
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();

    if (!note.title.trim() || !note.content.trim()) {
      toast.error('Title and content are mandatory fields!', {
        icon: '⚠',
      });
      return;
    }

    setUpdating(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success('Note updated successfully!');
      navigate('/');
    } catch (error) {
      console.log('Error updating note', error);
      toast.error('Failed to update note!');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoaderCircleIcon
          className="animate-spin size-12 text-primary"
          aria-hidden="true"
        />
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="btn btn-ghost"
            >
              <ArrowLeftIcon
                className="size-5"
                aria-hidden="true"
              />
              Back to Notes
            </Link>

            <button
              onClick={handleDelete}
              className="btn btn-outline btn-error"
            >
              <Trash2Icon
                className="size-5"
                aria-hidden="true"
              />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Update Note</h2>
              <form onSubmit={(e) => handleUpdate(e, note._id)}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note title"
                    className="input input-bordered"
                    value={note.title}
                    onChange={(e) =>
                      setNote({ ...note, title: e.target.value })
                    }
                  />
                </div>

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32"
                    value={note.content}
                    onChange={(e) =>
                      setNote({ ...note, content: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={updating}
                  >
                    {updating ? 'Updating...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
