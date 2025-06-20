import { Link } from 'react-router';
import { SparkleIcon, PlusIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SparkleIcon className="size-7 text-primary" />
            <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
              QuickNote
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to={'/create'}
              className="btn btn-primary"
            >
              <PlusIcon className="size-5" />
              <span className="hidden sm:inline">Create Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
