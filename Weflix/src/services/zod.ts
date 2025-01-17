import { z } from "zod";

export const SerieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  created_by: z.array(
    z.object({
      id: z.number(),
      credit_id: z.string(),
      name: z.string(),
      gender: z.number(),
      profile_path: z.string().nullable(),
    })
  ),
  episode_run_time: z.array(z.number()),
  first_air_date: z.string(),
  genres: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ),
  homepage: z.string(),
  id: z.number(),
  in_production: z.boolean(),
  languages: z.array(z.string()),
  last_air_date: z.string(),
  last_episode_to_air: z.object({
    id: z.number(),
    name: z.string(),
    overview: z.string(),
    vote_average: z.number(),
    vote_count: z.number(),
    air_date: z.string(),
    episode_number: z.number(),
    episode_type: z.string(),
    production_code: z.string(),
    runtime: z.number(),
    season_number: z.number(),
    show_id: z.number(),
    still_path: z.string().nullable(),
  }),
  name: z.string(),
  next_episode_to_air: z.object({
    id: z.number(),
    name: z.string(),
    overview: z.string(),
    vote_average: z.number(),
    vote_count: z.number(),
    air_date: z.string(),
    episode_number: z.number(),
    episode_type: z.string(),
    production_code: z.string(),
    runtime: z.number(),
    season_number: z.number(),
    show_id: z.number(),
    still_path: z.string().nullable(),
  }).nullable(),
  networks: z.array(
    z.object({
      id: z.number(),
      logo_path: z.string(),
      name: z.string(),
      origin_country: z.string(),
    })
  ),
  number_of_episodes: z.number(),
  number_of_seasons: z.number(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  production_companies: z.array(
    z.object({
      id: z.number(),
      logo_path: z.string().nullable(),
      name: z.string(),
      origin_country: z.string(),
    })
  ),
  production_countries: z.array(
    z.object({
      iso_3166_1: z.string(),
      name: z.string(),
    })
  ),
  seasons: z.array(
    z.object({
      air_date: z.string().nullable(),
      episode_count: z.number(),
      id: z.number(),
      name: z.string(),
      overview: z.string(),
      poster_path: z.string(),
      season_number: z.number(),
      vote_average: z.number(),
    })
  ),
  spoken_languages: z.array(
    z.object({
      english_name: z.string(),
      iso_639_1: z.string(),
      name: z.string(),
    })
  ),
  status: z.string(),
  tagline: z.string(),
  type: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

const movieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.string()),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const moviesArraySchema = z.array(movieSchema);

const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const genresArraySchema = z.array(genreSchema);