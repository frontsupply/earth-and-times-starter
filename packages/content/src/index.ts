import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type {
  Database,
  Feast,
  GlossaryTerm,
  Scripture,
  Study,
  TimelineEvent,
  Topic,
} from "@earth-times/types";

export type ContentClient = SupabaseClient<Database>;

type ClientMode = "anon" | "service";

type TopicWithScriptures = Topic & {
  scriptures: Scripture[];
};

export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export function hasSupabaseServiceRole() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

export function createSupabaseServerClient(mode: ClientMode = "anon"): ContentClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    mode === "service"
      ? process.env.SUPABASE_SERVICE_ROLE_KEY
      : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  return createClient<Database>(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

async function runListQuery<T>(
  queryName: string,
  resolve: (client: ContentClient) => Promise<{ data: T[] | null; error: { message: string } | null }>,
): Promise<T[]> {
  const client = createSupabaseServerClient();

  if (!client) {
    return [];
  }

  const { data, error } = await resolve(client);

  if (error) {
    throw new Error(`Supabase ${queryName} query failed: ${error.message}`);
  }

  return data ?? [];
}

async function runSingleQuery<T>(
  queryName: string,
  resolve: (client: ContentClient) => Promise<{ data: T | null; error: { message: string } | null }>,
): Promise<T | null> {
  const client = createSupabaseServerClient();

  if (!client) {
    return null;
  }

  const { data, error } = await resolve(client);

  if (error) {
    throw new Error(`Supabase ${queryName} query failed: ${error.message}`);
  }

  return data;
}

export async function getTopics(section?: string) {
  return runListQuery<Topic>("topics", async (client) => {
    let query = client.from("topics").select("*").order("sort_order").order("title");

    if (section) {
      query = query.eq("section", section);
    }

    return query;
  });
}

export async function getTopicBySlug(slug: string) {
  return runSingleQuery<Topic>("topic by slug", async (client) => {
    const query = await client.from("topics").select("*").eq("slug", slug).maybeSingle();
    return query;
  });
}

export async function getTopicWithScriptures(slug: string): Promise<TopicWithScriptures | null> {
  const topic = await getTopicBySlug(slug);

  if (!topic) {
    return null;
  }

  const client = createSupabaseServerClient();

  if (!client) {
    return { ...topic, scriptures: [] };
  }

  const { data, error } = await client
    .from("topic_scriptures")
    .select("sort_order, scriptures(*)")
    .eq("topic_id", topic.id)
    .order("sort_order");

  if (error) {
    throw new Error(`Supabase topic scriptures query failed: ${error.message}`);
  }

  const scriptures = (data ?? [])
    .map((row) => row.scriptures as Scripture | null)
    .filter((scripture): scripture is Scripture => Boolean(scripture));

  return { ...topic, scriptures };
}

export async function getScriptures(category?: string) {
  return runListQuery<Scripture>("scriptures", async (client) => {
    let query = client
      .from("scriptures")
      .select("*")
      .order("book")
      .order("chapter")
      .order("verse_start");

    if (category) {
      query = query.eq("category", category);
    }

    return query;
  });
}

export async function getStudies(category?: string) {
  return runListQuery<Study>("studies", async (client) => {
    let query = client.from("studies").select("*").order("title");

    if (category) {
      query = query.eq("category", category);
    }

    return query;
  });
}

export async function getStudyBySlug(slug: string) {
  return runSingleQuery<Study>("study by slug", async (client) => {
    const query = await client.from("studies").select("*").eq("slug", slug).maybeSingle();
    return query;
  });
}

export async function getTimelineEvents() {
  return runListQuery<TimelineEvent>("timeline events", async (client) =>
    client.from("timeline_events").select("*").order("sort_order").order("title"),
  );
}

export async function getFeasts() {
  return runListQuery<Feast>("feasts", async (client) =>
    client.from("feasts").select("*").order("hebrew_month").order("hebrew_day"),
  );
}

export async function getGlossaryTerms() {
  return runListQuery<GlossaryTerm>("glossary terms", async (client) =>
    client.from("glossary_terms").select("*").order("term"),
  );
}
