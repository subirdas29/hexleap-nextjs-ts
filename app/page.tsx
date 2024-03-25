import Image from 'next/image'
import Link from 'next/link'


import { fetchSports } from '@/utils'
import { SportsCard } from '@/components';
import { useEffect, useState } from 'react';
// import HeadingPage from './component/HeadingPage'


export default async function Home() {
  const allSports = await fetchSports();

  console.log(allSports)

  const isDataEmpty = !Array.isArray(allSports) || allSports.length <1 || !allSports;

  // console.log(allSports)
console.log(typeof(allSports))
  console.log(isDataEmpty)


  return (
    <div>

      {!isDataEmpty ?
      (
      <section>
        <div>
          {allSports?.map((sport,index) => (<SportsCard key={index} sport={sport} />))
          }
        </div>
       
        </section>
        ):(
        
      <div className='home_error-container'>
        <h2>Oops, no results</h2>
   
      </div>
      )}

    </div>
  )

}
