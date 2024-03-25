// components/SportsCard.tsx

'use Client';
import React from 'react';
import { SportsProps } from '../types/Cards';
import Image from 'next/image';

interface SportCardProps {
  sport: SportsProps;
}

const SportsCard = ({ sport }: SportCardProps) => {
    const { city_mpg,
        combination_mpg,
        cylinders,
        drive,
        fuel_type,
        highway_mpg,
        make,
        year,
    } = sport;
  return (
    <div className='sport-card group'>
        <div>
            <h2>
                {city_mpg}{combination_mpg} 
            </h2>
            <p>
                {fuel_type}
            </p>
        </div>
    </div>
  );
};

export default SportsCard;
