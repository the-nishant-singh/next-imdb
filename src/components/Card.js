import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ data }) => {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${data.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          height={300}
          width={500}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="spinner.svg"
          alt="image not available"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2">{data.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {data.title || data.name}
          </h2>
          <p className="flex items-center">
            {data.release_date || data.first_air_date}{" "}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {data.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
