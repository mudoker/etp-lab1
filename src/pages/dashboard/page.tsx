import { useEffect, useState } from 'react';

import { getRandomUser } from '@/services/getRandomUserService';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import NavigationBar from './components/navigation-bar';
import StaffCard from './components/staff-card';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any>();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRandomUser();
      setUserData(data.results);
      setFilteredData(data.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filterUser = () => {
    if (!userData) return;

    return userData.filter((entry: any) => {
      return (
        entry.name.first.toLowerCase().includes(search.toLowerCase()) ||
        entry.name.last.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  useEffect(() => {
    setFilteredData(filterUser());
  }, [search]);

  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <NavigationBar />

      {/* Contents */}
      <div className="flex w-full flex-col items-center gap-3">
        <span className="text-xl font-semibold">Staff List</span>

        <div className="flex w-full justify-center gap-4">
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="max-w-[83%] md:max-w-1/2"
            placeholder="Find User by Name"
          />

          <Button
            onClick={() => {
              if (!userData) return;

              if (search.trim() == '') {
                setFilteredData(userData);
                setSearch('');
                return;
              }

              setFilteredData(filterUser());
              setSearch('');
            }}
          >
            Search
          </Button>
        </div>
        <div className="grid grid-cols-1 justify-center gap-12 p-8 md:grid-cols-3 lg:grid-cols-4">
          {filteredData &&
            filteredData.map((entry: any, index: number) => (
              <StaffCard
                key={index}
                imageUrl={entry.picture.large as string}
                fullName={entry.name.first + ' ' + entry.name.last}
                email={entry.email as string}
                city={entry.location.city}
                country={entry.location.country}
                lat={entry.location.coordinates.latitude}
                lon={entry.location.coordinates.longitude}
              />
            ))}
        </div>

        {loading && <div>loading...</div>}

        {!loading && !userData && (
          <div className="self-center">
            An error occurs while retrieving our staff data.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
