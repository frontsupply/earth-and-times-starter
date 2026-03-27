export type ClockState = {
  sun: { azimuth: number; altitude: number };
  moon: { azimuth: number; altitude: number; phase: number; day: number };
  time: { biblicalHour: number; hourStart: string; hourEnd: string; isDay: boolean };
  calendar: { hebrewDate: string; annoMundi: number; feast: string | null };
  mazzaroth: { sign: string; meaning: string };
  atmosphere: { mode: "dawn" | "day" | "sunset" | "night" };
};

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Topic = {
  id: string;
  slug: string;
  title: string;
  section: string;
  summary: string | null;
  body_md: string | null;
  sort_order: number;
  created_at: string | null;
};

export type Scripture = {
  id: string;
  reference: string;
  book: string;
  chapter: number;
  verse_start: number;
  verse_end: number | null;
  text: string;
  category: string | null;
  created_at: string | null;
};

export type TopicScripture = {
  id: string;
  topic_id: string | null;
  scripture_id: string | null;
  note: string | null;
  sort_order: number;
};

export type Study = {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string | null;
  body_md: string | null;
  source_type: string | null;
  created_at: string | null;
};

export type TimelineEvent = {
  id: string;
  slug: string | null;
  title: string;
  anno_mundi: number | null;
  bc_year: number | null;
  ad_year: number | null;
  era: string | null;
  summary: string | null;
  body_md: string | null;
  sort_order: number;
};

export type Feast = {
  id: string;
  slug: string;
  title: string;
  hebrew_month: number | null;
  hebrew_day: number | null;
  summary: string | null;
  body_md: string | null;
};

export type GlossaryTerm = {
  id: string;
  slug: string;
  term: string;
  definition: string;
  body_md: string | null;
};

export type DailyClockCache = {
  id: string;
  cache_date: string;
  location_key: string;
  payload: Json;
  created_at: string | null;
};

type Insertable<Row, OptionalKeys extends keyof Row> = Omit<Row, OptionalKeys> &
  Partial<Pick<Row, OptionalKeys>>;

export type Database = {
  public: {
    Tables: {
      topics: {
        Row: Topic;
        Insert: Insertable<Topic, "id" | "summary" | "body_md" | "sort_order" | "created_at">;
        Update: Partial<Topic>;
      };
      scriptures: {
        Row: Scripture;
        Insert: Insertable<
          Scripture,
          "id" | "verse_end" | "category" | "created_at"
        >;
        Update: Partial<Scripture>;
      };
      topic_scriptures: {
        Row: TopicScripture;
        Insert: Insertable<
          TopicScripture,
          "id" | "topic_id" | "scripture_id" | "note" | "sort_order"
        >;
        Update: Partial<TopicScripture>;
      };
      studies: {
        Row: Study;
        Insert: Insertable<
          Study,
          "id" | "summary" | "body_md" | "source_type" | "created_at"
        >;
        Update: Partial<Study>;
      };
      timeline_events: {
        Row: TimelineEvent;
        Insert: Insertable<
          TimelineEvent,
          | "id"
          | "slug"
          | "anno_mundi"
          | "bc_year"
          | "ad_year"
          | "era"
          | "summary"
          | "body_md"
          | "sort_order"
        >;
        Update: Partial<TimelineEvent>;
      };
      feasts: {
        Row: Feast;
        Insert: Insertable<
          Feast,
          "id" | "hebrew_month" | "hebrew_day" | "summary" | "body_md"
        >;
        Update: Partial<Feast>;
      };
      glossary_terms: {
        Row: GlossaryTerm;
        Insert: Insertable<GlossaryTerm, "id" | "body_md">;
        Update: Partial<GlossaryTerm>;
      };
      daily_clock_cache: {
        Row: DailyClockCache;
        Insert: Insertable<
          DailyClockCache,
          "id" | "created_at"
        >;
        Update: Partial<DailyClockCache>;
      };
    };
  };
};
