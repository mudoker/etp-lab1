import React from 'react';

import { MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface UserData {
  imageUrl: string;
  fullName: string;
  email: string;
  city: string;
  country: string;
  lat: number;
  lon: number;
}

interface TmpProps {
  title: string;
  value: string;
  isLink: boolean;
  lat: number;
  lon: number;
}

const TitleValue: React.FC<TmpProps> = ({
  title,
  value,
  isLink = false,
  lat,
  lon,
}) => {
  return (
    <div>
      <span className="font-bold">{title}</span>
      {value != '' && <span>: </span>}
      {isLink ? (
        <Button
          variant="link"
          className="p-0 text-blue-500 hover:cursor-pointer"
          onClick={() =>
            window.open(
              `https://www.openstreetmap.org/search?lat=${lat}&lon=${lon}#map=11/10.8023/106.7311`,
              '_blank'
            )
          }
        >
          {value}
          <MapPin />
        </Button>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

const StaffCard: React.FC<UserData> = ({
  imageUrl,
  fullName,
  email,
  city,
  country,
  lat,
  lon,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 hover:bg-gray-100">
      <img className="rounded-full" src={imageUrl} width={100} />
      <TitleValue title={fullName} value="" isLink={false} lat={0} lon={0} />
      {email}
      <TitleValue
        title={'City'}
        value={city}
        isLink={true}
        lat={lat}
        lon={lon}
      />
      <TitleValue
        title={'Country'}
        value={country}
        isLink={false}
        lat={0}
        lon={0}
      />
    </div>
  );
};

export default StaffCard;
