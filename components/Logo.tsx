import React from 'react'
import Link from "next/link"
import Image from 'next/image'

function Logo() {
  return (
    <Link href={"/"}
    className='flex justify-between items-center gap-x-2 font-bold text-xl bg-gradient-to-r from-orange-500 to-amber-700 text-transparent bg-clip-text
    hover:cursor-pointer'
    >
      <Image
              src="/ShaktiSaathiHorizontalLightBGEng.svg"
              alt="Shakti Saathi"
              width={120}
              height={40}
              className="h-12 w-auto"
              priority
        />
      Survey Builder
    </Link>
  )
}

export default Logo