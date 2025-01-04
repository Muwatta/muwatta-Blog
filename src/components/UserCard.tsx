import { FaUserCircle } from 'react-icons/fa';

interface Person {
  name: string;
  following: boolean;
}

function UserCard({ person }: { person: Person }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-md">
      <div className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span className="font-medium text-lg">{person.name}</span>
      </div>
      <button
        className={`px-4 py-1 text-sm rounded-full ${
          person.following ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {person.following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

export default UserCard;
