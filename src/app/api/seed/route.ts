import { NextResponse, NextRequest } from "next/server";

interface Movie {
  title: string;
  thumbnail: string[];
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
}

export async function GET(request: Request) {
  const movies: Movie[] = [
    {
      title: "Beyond Earth",
      thumbnail: [
        "/thumbnails/beyond-earth/trending/small.jpg",
        "/thumbnails/beyond-earth/trending/large.jpg",
        "/thumbnails/beyond-earth/regular/small.jpg",
        "/thumbnails/beyond-earth/regular/medium.jpg",
        "/thumbnails/beyond-earth/regular/large.jpg",
      ],
      year: 2019,
      category: "Movie",
      rating: "PG",
      isTrending: true,
    },
    {
      title: "Bottom Gear",
      thumbnail: [
        "/thumbnails/bottom-gear/trending/small.jpg",
        "/thumbnails/bottom-gear/trending/large.jpg",
        "/thumbnails/bottom-gear/regular/small.jpg",
        "/thumbnails/bottom-gear/regular/medium.jpg",
        "/thumbnails/bottom-gear/regular/large.jpg",
      ],
      year: 2021,
      category: "Movie",
      rating: "PG",
      isTrending: true,
    },
    {
      title: "Undiscovered Cities",
      thumbnail: [
        "/thumbnails/undiscovered-cities/trending/small.jpg",
        "/thumbnails/undiscovered-cities/trending/large.jpg",
        "/thumbnails/undiscovered-cities/regular/small.jpg",
        "/thumbnails/undiscovered-cities/regular/medium.jpg",
        "/thumbnails/undiscovered-cities/regular/large.jpg",
      ],
      year: 2019,
      category: "TV Series",
      rating: "E",
      isTrending: true,
    },
    {
      title: "1998",
      thumbnail: [
        "/thumbnails/1998/trending/small.jpg",
        "/thumbnails/1998/trending/large.jpg",
        "/thumbnails/1998/regular/small.jpg",
        "/thumbnails/1998/regular/medium.jpg",
        "/thumbnails/1998/regular/large.jpg",
      ],
      year: 2021,
      category: "Movie",
      rating: "18+",
      isTrending: true,
    },
    {
      title: "Dark Side of the Moon",
      thumbnail: [
        "/thumbnails/dark-side-of-the-moon/trending/small.jpg",
        "/thumbnails/dark-side-of-the-moon/trending/large.jpg",
        "/thumbnails/dark-side-of-the-moon/regular/small.jpg",
        "/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
        "/thumbnails/dark-side-of-the-moon/regular/large.jpg",
      ],
      year: 2018,
      category: "TV Series",
      rating: "PG",
      isTrending: true,
    },
    {
      title: "The Great Lands",
      thumbnail: [
        "/thumbnails/the-great-lands/regular/small.jpg",
        "/thumbnails/the-great-lands/regular/medium.jpg",
        "/thumbnails/the-great-lands/regular/large.jpg",
      ],
      year: 2019,
      category: "Movie",
      rating: "E",
      isTrending: false,
    },
  ];

  return NextResponse.json(movies);
}
