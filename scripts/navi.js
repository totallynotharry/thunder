/**
 * These are the actual navigation items
 */

const navItems = [
  { title: "Home", icon: "fa-home", url: "page/home.html", type: "item" },
  { type: "divider" },
  { title: "Dashboard", icon: "fa-table-columns", type: "item", url: "/page/dash.html" },
  { title: "Games", icon: "fa-gamepad", type: "item", nest: "games" },
  { type: "divider" },
  { title: "Browser", icon: "fa-search", url: "/scram.html", type: "item" },
  { type: "divider" },
  { title: "AI", icon: "fa-robot", url: "page/app/ai.html", type: "item" },
  { title: "YouTube", icon: "fa-brands fa-youtube", url: "page/app/yt.html", type: "item" },
  { title: "Music", icon: "fa-music", url: "page/music.html", type: "item" },
];

const extraNavItems = [
    { title: "Privacy", icon: "fa-lock", url: "usage.html", type: "item", selectable: true },
    { title: "Repo (frontend)", icon: "fa-brands fa-gitlab", url: "https://gitlab.com/technonyte00/thunder", type: "item", direct: true },
];

var navData = {};
