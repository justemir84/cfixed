// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolWeight } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

type IconMapping = Record<string, ComponentProps<typeof MaterialIcons>["name"]>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * SF Symbols → Material Icons mapping
 */
const MAPPING = {
  // Navigation
  "house.fill":                          "home",
  "chart.bar.fill":                      "bar-chart",
  "person.fill":                         "person",
  "chevron.right":                       "chevron-right",
  "chevron.left":                        "chevron-left",

  // Header
  "menu":                                "menu",
  "questionmark.circle":                 "help",
  "bell.fill":                           "notifications",

  // Home — Quick Start
  "book.fill":                           "book",
  "play.fill":                           "play-arrow",
  "checkmark.circle.fill":              "check-circle",

  // Home — Library
  "bookmark.fill":                       "bookmark",
  "heart.fill":                          "favorite",
  "info.circle.fill":                    "info",
  "note.text":                           "note",
  "trophy.fill":                         "emoji-events",
  "cube.fill":                           "inventory-2",

  // Theme / appearance
  "moon.fill":                           "nightlight",
  "sun.max.fill":                        "wb-sunny",
  "eye.fill":                            "visibility",
  "text.alignleft":                      "format-size",

  // Profile — Settings icons
  "wrench.fill":                         "build",
  "bolt.fill":                           "bolt",
  "timer.fill":                          "timer",
  "clock.fill":                          "schedule",
  "map.fill":                            "map",
  "party.popper.fill":                   "celebration",
  "vibration.fill":                      "vibration",
  "shuffle.fill":                        "shuffle",
  "arrow.triangle.2.circlepath.fill":    "loop",
  "speaker.fill":                        "volume-up",
  "speaker.wave.3.fill":                 "record-voice-over",
  "globe":                               "language",
  "speedometer":                         "speed",
  "cloud.fill":                          "cloud",
  "arrow.down.circle.fill":              "cloud-download",
  "arrow.clockwise":                     "autorenew",

  // General
  "paperplane.fill":                     "send",
  "chevron.left.forwardslash.chevron.right": "code",
} as const satisfies IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
