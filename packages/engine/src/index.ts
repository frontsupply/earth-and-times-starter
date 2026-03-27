import type { ClockState } from "@earth-times/types";

export function getClockState(): ClockState {
  return {
    sun: { azimuth: 135, altitude: 42 },
    moon: { azimuth: 220, altitude: 18, phase: 0.84, day: 13 },
    time: { biblicalHour: 3, hourStart: "9:12 AM", hourEnd: "10:04 AM", isDay: true },
    calendar: { hebrewDate: "14 Nisan", annoMundi: 6024, feast: null },
    mazzaroth: { sign: "Virgo", meaning: "The Virgin" },
    atmosphere: { mode: "sunset" },
  };
}
