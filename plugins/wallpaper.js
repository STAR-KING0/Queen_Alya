const fs = require("fs");
const fetch = require("node-fetch");
const { smd, TelegraPh } = require("../lib");
const Config = require("../config");

const API_BASE_URL = "https://api.unsplash.com/photos/random?query=";
const UNSPLASH_ACCESS_KEY = "Hq3EOP7FXi5YaB4MbOpQd5mgYN5XmaMDvosoDr2bl-A"; // Provided Unsplash Access Key

const getWallpaperUrl = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
    const jsonResponse = await response.json();
    return jsonResponse[0]?.urls?.regular || null;
  } catch (error) {
    throw new Error("Error fetching wallpaper");
  }
};

const sendWallpaper = async (m, query) => {
  try {
    const url = await getWallpaperUrl(query);
    if (url) {
      await m.send(url, { caption: Config.caption }, "image", m);
    } else {
      await m.send("*_No image found_*");
    }
  } catch (error) {
    await m.error(
      error.message + "\n\ncommand: " + query,
      error,
      "*_No response from API, Sorry!!_*"
    );
  }
};

smd(
  {
    pattern: "aesthetic",
    category: "wallpaper",
    filename: __filename,
    desc: "Get an aesthetic wallpaper.",
  },
  (m) => sendWallpaper(m, "aesthetic")
);

smd(
  {
    pattern: "bike",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a bike wallpaper.",
  },
  (m) => sendWallpaper(m, "bike")
);

smd(
  {
    pattern: "cr7",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a CR7 (Cristiano Ronaldo) wallpaper.",
  },
  (m) => sendWallpaper(m, "cr7")
);

smd(
  {
    pattern: "cat",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a cat wallpaper.",
  },
  (m) => sendWallpaper(m, "cat")
);

smd(
  {
    pattern: "dog",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a dog wallpaper.",
  },
  (m) => sendWallpaper(m, "dog")
);

smd(
  {
    pattern: "messi",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a Lionel Messi wallpaper.",
  },
  (m) => sendWallpaper(m, "messi")
);

smd(
  {
    pattern: "mlegend",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a Mobile Legends wallpaper.",
  },
  (m) => sendWallpaper(m, "mobile legends")
);

smd(
  {
    pattern: "pubg",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a PUBG wallpaper.",
  },
  (m) => sendWallpaper(m, "pubg")
);

smd(
  {
    pattern: "random",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a random wallpaper.",
  },
  (m) => sendWallpaper(m, "random")
);

smd(
  {
    pattern: "car",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a car wallpaper.",
  },
  (m) => sendWallpaper(m, "car")
);

smd(
  {
    pattern: "blackpink",
    category: "wallpaper",
    filename: __filename,
    desc: "Get a Blackpink wallpaper.",
  },
  (m) => sendWallpaper(m, "blackpink")
);