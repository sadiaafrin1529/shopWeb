import { navData } from '@/config/nav'
import Link from 'next/link';
import React from 'react'

export default function DesktopMenu() {
  return (
    <div>
      <ul className="flex gap-5">
        {navData.map((item) => (
          <Link
            key={item?.id}
            href={item?.links}
            className="text-[18px] text-gray-600 font-medium hover:text-[#845164]"
          >
            <li>{item?.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
