"use client";

import { montserratMedium } from "@/public/fonts";
import { useGetCardQuery } from "@/services/post";
import Link from "next/link";

type Props = {
  count_element_show: number
  filter: string
}

const Card = ({ count_element_show, filter }: Props) => {
  const { data, error, isLoading, isSuccess } = useGetCardQuery("");

  return (
    <>
      {isLoading ? (
        <h3 className="text-3xl">Loading Event...</h3>
      ) : isSuccess && data ? (
        data?.data[0].attributes.EventCard.slice(0, count_element_show).filter(event => event.country.toLowerCase().includes(filter.toLowerCase())).map((event) => {
          return (
            <div className="w-[50rem] h-min px-[1rem] pt-[1rem] pb-[2rem] rounded-[1rem] border border-black" key={event.id}>
            <img
              className="w-[48rem] h-[30rem] mb-[1rem]"
              src={`http://localhost:1337${event.image.data.attributes.url}`}
              alt={event.image.data.attributes.alternativeText}
            />
            <div className="flex text-3xl text-black mb-[2rem]">
              <div className=" py-[.4rem] px-[2.2rem] bg-light-grey rounded-[1rem] mr-[1.5rem]">
                {event.country}
              </div>
              <div className=" py-[.4rem] px-[2.2rem] bg-light-blue/20 rounded-[1rem] mr-[1.5rem]">
                {event.date}
              </div>
              <div className=" py-[.4rem] px-[1.6rem] bg-light-green/20 rounded-[1rem]">
                {event.price}
              </div>
            </div>
            <p
              className={`${montserratMedium.className} text-4xl text-black ml-[1rem] mb-[3rem]`}
            >
              {event.description}
            </p>
            {/* <Link href={`/${event}`} className="btn">Learn More</Link> */}
            <Link href="/events-info" className="btn">
              Learn More
            </Link>
          </div>
          )
        })
      ) : (
        <h3 className="text-3xl">Please wait...</h3>
      )}
    </>
  );
};

export default Card;
