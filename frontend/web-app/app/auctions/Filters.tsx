import { useParamStore } from '@/hooks/useAuctionStore';
import { Button } from 'flowbite-react';
import React from 'react';
import { AiOutlineClockCircle, AiOutlineSortAscending } from 'react-icons/ai';
import { BsFillStopCircleFill, BsStopwatchFill } from 'react-icons/bs';
import { GiFinishLine, GiFlame } from 'react-icons/gi';

const pageSizeButtons = [4, 8, 12];

const orderButtons = [
  { label: 'Alphabetical', icon: AiOutlineSortAscending, value: 'make' },
  { label: 'End Date', icon: AiOutlineClockCircle, value: 'endingSoon' },
  { label: 'Resently Added', icon: BsFillStopCircleFill, value: 'new' },
];

const filterButons = [
  { label: 'Live Auctions', icon: GiFlame, value: 'live' },
  { label: 'Ending < 6 hours', icon: GiFinishLine, value: 'endingSoon' },
  { label: 'Completed', icon: BsStopwatchFill, value: 'finished' },
];

export default function Filters() {
  const pageSize = useParamStore((state) => state.pageSize);
  const setParams = useParamStore((state) => state.setParams);
  const orderBy = useParamStore((state) => state.orderBy);
  const filterBy = useParamStore((state) => state.filterBy);

  return (
    <div className="flex justify-between items-center mb-4">

      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Filter by</span>
        <Button.Group>
          {filterButons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ filterBy: value })}
              color={`${value === filterBy ? 'red' : 'gray'}`}
              className="focus:ring-0"
            >
              <Icon className="mr-3 h-5 w-4" />
              {label}
            </Button>
          ))}
        </Button.Group>
      </div>

      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Order by</span>
        <Button.Group>
          {orderButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ orderBy: value })}
              color={`${value === orderBy ? 'red' : 'gray'}`}
              className="focus:ring-0"
            >
              <Icon className="mr-3 h-5 w-4" />
              {label}
            </Button>
          ))}
        </Button.Group>
      </div>

      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
        <Button.Group>
          {pageSizeButtons.map((value, i) => (
            <Button
              key={i}
              onClick={() => setParams({ pageSize: value })}
              color={`${pageSize === value ? 'red' : 'gray'}`}
              className="focus:ring-0"
            >
              {value}
            </Button>
          ))}
        </Button.Group>
      </div>
    </div>
  );
}
