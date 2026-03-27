export type ClockState = {
  sun: { azimuth: number; altitude: number };
  moon: { azimuth: number; altitude: number; phase: number; day: number };
  time: { biblicalHour: number; hourStart: string; hourEnd: string; isDay: boolean };
  calendar: { hebrewDate: string; annoMundi: number; feast: string | null };
  mazzaroth: { sign: string; meaning: string };
  atmosphere: { mode: "dawn" | "day" | "sunset" | "night" };
};
