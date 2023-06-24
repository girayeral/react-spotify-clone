import React from "react";

const Playlists = () => {
  const playlists = [
    {
      id: 1,
      title: 'Popular Songs',
    },
    {
      id: 2,
      title: 'Rock Music',
    },
    {
      id: 3,
      title: 'Country Music',
    },
    {
      id: 4,
      title: 'Jazz Music',
    },
    {
      id: 5,
      title: 'Blues Music',
    },
    {
      id: 6,
      title: 'Rap Music',
    },
    {
      id: 7,
      title: 'Electronic Music',
    },
    {
      id: 8,
      title: 'Classical Music',
    },
    {
      id: 9,
      title: 'Alternative Rock',
    },
    {
      id: 10,
      title: 'Metal Music',
    },
    {
      id: 11,
      title: 'Reggae Music',
    },
    {
      id: 12,
      title: 'Hip Hop Music',
    },
    {
      id: 13,
      title: 'Folk Music',
    },
    {
      id: 14,
      title: 'R&B Music',
    },
    {
      id: 15,
      title: 'Indie Music',
    },
    {
      id: 16,
      title: 'Punk Music',
    },
    {
      id: 17,
      title: 'Soul Music',
    },
    {
      id: 18,
      title: 'Funk Music',
    },
    {
      id: 19,
      title: 'Pop Punk Music',
    },
    {
      id: 20,
      title: 'Disco Music',
    },
  ]; 
  
  

  return (
    <nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <a
              href=""
              className="text-sm text-link hover:text-white flex h-8 items-center"
            >
              {playlist.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Playlists;
