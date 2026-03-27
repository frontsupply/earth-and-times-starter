create extension if not exists pgcrypto;

create table if not exists topics (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  section text not null,
  summary text,
  body_md text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists scriptures (
  id uuid primary key default gen_random_uuid(),
  reference text not null,
  book text not null,
  chapter int not null,
  verse_start int not null,
  verse_end int,
  text text not null,
  category text,
  created_at timestamptz default now()
);

create table if not exists topic_scriptures (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid references topics(id) on delete cascade,
  scripture_id uuid references scriptures(id) on delete cascade,
  note text,
  sort_order int default 0
);

create table if not exists studies (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null,
  summary text,
  body_md text,
  source_type text,
  created_at timestamptz default now()
);

create table if not exists timeline_events (
  id uuid primary key default gen_random_uuid(),
  slug text unique,
  title text not null,
  anno_mundi int,
  bc_year int,
  ad_year int,
  era text,
  summary text,
  body_md text,
  sort_order int default 0
);

create table if not exists feasts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  hebrew_month int,
  hebrew_day int,
  summary text,
  body_md text
);

create table if not exists glossary_terms (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  term text not null,
  definition text not null,
  body_md text
);

create table if not exists daily_clock_cache (
  id uuid primary key default gen_random_uuid(),
  cache_date date not null,
  location_key text not null,
  payload jsonb not null,
  created_at timestamptz default now(),
  unique (cache_date, location_key)
);
