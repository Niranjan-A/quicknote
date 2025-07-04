import { Link } from 'react-router';
import { NotebookPenIcon, Trash2Icon } from 'lucide-react';
import { formateDate } from '../lib/utils';
import toast from 'react-hot-toast';
import api from '../lib/axios';

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm('Are you sure you want to delete this note?')) {
      return;
    }

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
      toast.success('Note deleted successfully!');
    } catch (error) {
      console.log('Error in handleDelete: ', error);
      toast.error('Failed to delete note!');
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-primary"
    >
      <div className="card-body">
        <h2 className="card-title text-base-content">{note.title}</h2>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formateDate(new Date(note.updatedAt))}
          </span>
          <div className="flex items-center gap-1">
            <button
              className="btn btn-ghost btn-xs text-accent"
              aria-label="Edit note"
              title="Edit note"
            >
              <NotebookPenIcon
                className="size-4"
                aria-hidden="true"
              />
            </button>
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
              aria-label="Delete note"
              title="Delete note"
            >
              <Trash2Icon
                className="size-4"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
