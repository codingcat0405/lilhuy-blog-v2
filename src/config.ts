export const SITE = {
  website: "https://blog.lilhuy.com/",
  author: "Lilhuy",
  profile: "https://github.com/lilhuy0405",
  desc: "Lilhuy's personal blog - Where I share my thoughts, projects, and experiences.",
  title: "Lilhuy's Blog",
  ogImage: "coddingcat.jpeg",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 9,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showGalleries: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit this post",
    url: "https://github.com/codingcat0405/lilhuy-blog-v2/edit/master/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Ho_Chi_Minh", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  introAudio: {
    enabled: false, // mostrar/ocultar el reproductor en el hero
    src: "/audio/intro-web.mp3", // ruta al archivo (relativa a /public)
    label: "INTRO.MP3", // etiqueta display en el reproductor
    duration: 30, // duración en segundos (para la barra de progreso fija)
  },
} as const;
