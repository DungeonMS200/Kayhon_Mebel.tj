/**
 * KAYHON MEBEL — центральная конфигурация сайта.
 *
 * ВНИМАНИЕ: этот файл — единый источник правды для всех данных компании.
 * Чтобы изменить телефон, ссылки, тексты или изображения, достаточно
 * отредактировать значения ниже. Никакие данные о компании не дублируются
 * в компонентах.
 *
 * ИЗОБРАЖЕНИЯ:
 *   В продакшене реальные фотографии Kayhon Mebel из Instagram/Facebook
 *   должны быть загружены в /public/assets/images/kayhon/ и прописаны
 *   в поле `src` соответствующих элементов ниже.
 *   Текущие URL — это качественные placeholder-изображения интерьеров,
 *   которые НЕ приписываются KAYHON MEBEL и должны быть заменены
 *   на реальные фотографии перед публикацией.
 */

export type NavId =
  | "home"
  | "about"
  | "catalog"
  | "portfolio"
  | "order"
  | "contacts";

export const company = {
  name: "KAYHON MEBEL",
  brandTop: "KAYHON",
  brandBottom: "MEBEL",
  city: "Худжанд",
  region: "Согдийская область",
  country: "Таджикистан",
  locationLabel: "Худжанд, Таджикистан",
  phone: "+992 11 900 3333",
  phoneHref: "tel:+992119003333",
  instagram: "https://www.instagram.com/kayhon_mebel.tj_/",
  instagramHandle: "@kayhon_mebel.tj_",
  facebook: "https://www.facebook.com/kayhonmebel.tj/",
  // WhatsApp / Telegram — НЕ подтверждены. Кнопки скрыты, см. `social.whatsapp` / `social.telegram`.
  whatsapp: null as string | null,
  telegram: null as string | null,
  email: null as string | null,
  // Полный адрес НЕ публикуется — не подтверждён в источниках.
  address: null as string | null,
  // Карта — только после подтверждения точного адреса.
  mapEmbed: null as string | null,
} as const;

export const seo = {
  title: "KAYHON MEBEL — мебель на заказ в Худжанде",
  description:
    "KAYHON MEBEL — корпусная и мягкая мебель на заказ в Худжанде. Индивидуальный дизайн, бесплатный замер, доставка и установка.",
  keywords: [
    "мебель Худжанд",
    "мебель на заказ Худжанд",
    "Kayhon Mebel",
    "Кайхон Мебель",
    "корпусная мебель Худжанд",
    "мягкая мебель Худжанд",
    "мебель на заказ Таджикистан",
  ],
  ogImage: "/assets/images/kayhon/og-cover.jpg",
  ogType: "website",
  ogLocale: "ru_RU",
  siteUrl: "https://kayhon-mebel.tj",
  twitterCard: "summary_large_image" as const,
} as const;

export const navigation: { id: NavId; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О компании" },
  { id: "catalog", label: "Каталог" },
  { id: "portfolio", label: "Наши работы" },
  { id: "order", label: "Мебель на заказ" },
  { id: "contacts", label: "Контакты" },
];

/** Услуги, заявленные компанией публично (Instagram/Facebook). */
export const services = [
  {
    id: "custom-cabinetry",
    title: "Корпусная мебель на заказ",
    description:
      "Кухни, шкафы, гардеробные и корпусные решения, спроектированные под конкретное помещение и задачи.",
  },
  {
    id: "upholstered",
    title: "Мягкая мебель на заказ",
    description:
      "Диваны, кресла и мягкая мебель по индивидуальному проекту — с учётом стиля и комфорта.",
  },
  {
    id: "home-furniture",
    title: "Мебель для дома",
    description:
      "Комплексные решения для жилых пространств: от отдельных предметов до целых комнат.",
  },
  {
    id: "custom-projects",
    title: "Индивидуальные проекты",
    description:
      "Решения нестандартных задач — с проработкой дизайна, эргономики и деталей исполнения.",
  },
  {
    id: "design",
    title: "Дизайн мебели",
    description: "Профессиональный дизайн-проект мебели. Компания предоставляет услугу бесплатно.",
    badge: "Бесплатно",
  },
  {
    id: "measurement",
    title: "Замер",
    description: "Замер помещения входит в предложение компании. Услуга бесплатна.",
    badge: "Бесплатно",
  },
  {
    id: "delivery",
    title: "Доставка",
    description: "Доставка заявлена компанией как бесплатная услуга для заказчиков.",
    badge: "Бесплатно",
  },
  {
    id: "installation",
    title: "Установка",
    description: "Установка мебели выполняется командой компании и бесплатна для заказчика.",
    badge: "Бесплатно",
  },
];

/** Преимущества — главный блок «Наш подход». */
export const advantages = [
  {
    id: "design-individual",
    title: "Индивидуальный дизайн",
    description: "Мебель создаётся с учётом особенностей конкретного помещения.",
  },
  {
    id: "free-measurement",
    title: "Бесплатный замер",
    description: "Замер помещения входит в предложение компании.",
  },
  {
    id: "free-delivery",
    title: "Бесплатная доставка",
    description: "Доставка заявлена компанией как бесплатная услуга.",
  },
  {
    id: "free-installation",
    title: "Бесплатная установка",
    description: "Установка мебели также заявлена как бесплатная услуга.",
  },
];

export type ProcessStep = {
  num: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Заявка",
    description: "Вы оставляете заявку — по телефону или через форму на сайте.",
  },
  {
    num: "02",
    title: "Обсуждение идеи",
    description: "Обсуждаем задачу, пожелания и стиль будущего решения.",
  },
  {
    num: "03",
    title: "Дизайн и замер",
    description: "Готовим дизайн-проект и проводим бесплатный замер помещения.",
  },
  {
    num: "04",
    title: "Согласование проекта",
    description: "Согласуем все детали проекта с заказчиком до начала изготовления.",
  },
  {
    num: "05",
    title: "Изготовление",
    description: "Производим мебель в соответствии с утверждённым проектом.",
  },
  {
    num: "06",
    title: "Доставка и установка",
    description: "Бесплатно доставляем и устанавливаем мебель на месте.",
  },
];

export const whyUs = [
  {
    id: "individual",
    title: "Индивидуальный подход",
    description: "Каждый проект разрабатывается под конкретное пространство и задачи заказчика.",
  },
  {
    id: "design",
    title: "Дизайн",
    description: "Создаём мебель, которая сочетает эстетику, стиль и продуманную эргономику.",
  },
  {
    id: "comfort",
    title: "Удобство",
    description: "Продумываем эксплуатацию мебели в повседневной жизни — это важно.",
  },
  {
    id: "practical",
    title: "Практичность",
    description: "Решения, которые остаются удобными и актуальными длительное время.",
  },
  {
    id: "details",
    title: "Внимание к деталям",
    description: "Прорабатываем мелочи — именно они формируют итоговое восприятие мебели.",
  },
  {
    id: "style",
    title: "Стиль и комфорт",
    description: "Главная идея — создавать мебель, которая приносит в дом стиль и комфорт.",
  },
];

export type PortfolioCategory =
  | "all"
  | "kitchen"
  | "bedroom"
  | "living"
  | "wardrobe"
  | "cabinetry"
  | "upholstered"
  | "other";

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "kitchen", label: "Кухни" },
  { id: "bedroom", label: "Спальни" },
  { id: "living", label: "Гостиные" },
  { id: "wardrobe", label: "Шкафы" },
  { id: "cabinetry", label: "Корпусная мебель" },
  { id: "upholstered", label: "Мягкая мебель" },
  { id: "other", label: "Другие проекты" },
];

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "all">;
  /** Ширина/высота нужны для корректного masonry-раскладки и aspect-ratio. */
  w: number;
  h: number;
  src: string;
  alt: string;
  /** Ссылка на оригинальный пост в соцсети, если подтверждена. */
  sourceUrl?: string;
  /** Подпись к фото в lightbox (только если подтверждена). */
  caption?: string;
};

/**
 * ВНИМАНИЕ: эти изображения — placeholder-визуалы интерьеров премиум-класса,
 * полученные через публичный поиск. Они НЕ являются работами KAYHON MEBEL
 * и должны быть заменены на реальные фотографии из Instagram/Facebook
 * компании перед публикацией сайта.
 *
 * Чтобы подставить реальные фото, загрузите файлы в
 *   /public/assets/images/kayhon/
 * и замените поля `src` ниже на путь вида "/assets/images/kayhon/имя.jpg".
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Кухонное решение",
    category: "kitchen",
    w: 1828,
    h: 1215,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e4b7cdd0b71b.png",
    alt: "Кухонное решение — корпусная мебель в тёплых тонах",
  },
  {
    id: "p2",
    title: "Кухня с островом",
    category: "kitchen",
    w: 1600,
    h: 900,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a2cccf792249.jpg",
    alt: "Кухня с островом — современное решение",
  },
  {
    id: "p3",
    title: "Кухонный интерьер",
    category: "kitchen",
    w: 1080,
    h: 1080,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d8f4b90a821b.jpg",
    alt: "Кухонный интерьер с деревянными фасадами",
  },
  {
    id: "p4",
    title: "Кухня в тёплой палитре",
    category: "kitchen",
    w: 1600,
    h: 900,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e09ca06a8c47.jpg",
    alt: "Кухня в тёплой палитре с минималистичными фасадами",
  },
  {
    id: "p5",
    title: "Спальня — мягкая панель",
    category: "bedroom",
    w: 4000,
    h: 6000,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4fe25cda8c9b.jpg",
    alt: "Спальня с мягкой изголовной панелью",
  },
  {
    id: "p6",
    title: "Спальня в тёплых тонах",
    category: "bedroom",
    w: 1248,
    h: 832,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/028be95e453e.png",
    alt: "Спальня в тёплых тонах с деревянными акцентами",
  },
  {
    id: "p7",
    title: "Интерьер спальни",
    category: "bedroom",
    w: 3199,
    h: 1800,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/aaf9c089e913.jpg",
    alt: "Интерьер спальни с корпусной мебелью",
  },
  {
    id: "p8",
    title: "Гостиная — мягкая мебель",
    category: "living",
    w: 8688,
    h: 4887,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dcedff8c9d17.jpg",
    alt: "Гостиная с мягкой мебелью и панорамными окнами",
  },
  {
    id: "p9",
    title: "Диван в гостиной",
    category: "living",
    w: 1500,
    h: 1500,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a16e4098f2c5.jpg",
    alt: "Диван в современной гостиной",
  },
  {
    id: "p10",
    title: "Мягкая зона",
    category: "upholstered",
    w: 1000,
    h: 1000,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1bd09a6eabbe.jpg",
    alt: "Мягкая зона с диваном и креслом",
  },
  {
    id: "p11",
    title: "Кресло и текстиль",
    category: "upholstered",
    w: 900,
    h: 1200,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bb946b3ccf05.jpg",
    alt: "Кресло и текстиль в мягкой зоне",
  },
  {
    id: "p12",
    title: "Гардеробная",
    category: "wardrobe",
    w: 1844,
    h: 2500,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/581044338b46.jpg",
    alt: "Гардеробная со встроенными шкафами",
  },
  {
    id: "p13",
    title: "Встроенный шкаф",
    category: "wardrobe",
    w: 1280,
    h: 800,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2d53531a063a.png",
    alt: "Встроенный шкаф в интерьере",
  },
  {
    id: "p14",
    title: "Система хранения",
    category: "wardrobe",
    w: 2880,
    h: 1580,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bb0930b7444f.jpg",
    alt: "Система хранения в гардеробной",
  },
  {
    id: "p15",
    title: "Корпусная композиция",
    category: "cabinetry",
    w: 1768,
    h: 2308,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ee6365e97994.jpg",
    alt: "Корпусная композиция в интерьере",
  },
  {
    id: "p16",
    title: "Детали корпуса",
    category: "cabinetry",
    w: 1600,
    h: 900,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4c80448759d8.jpg",
    alt: "Детали корпусной мебели в интерьере",
  },
  {
    id: "p17",
    title: "Столовая зона",
    category: "other",
    w: 1536,
    h: 768,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a372749171a7.webp",
    alt: "Столовая зона с мебелью из дерева",
  },
  {
    id: "p18",
    title: "Прихожая",
    category: "other",
    w: 977,
    h: 1465,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d167e3bb38b6.jpg",
    alt: "Прихожая с консолью и корпусной мебелью",
  },
  {
    id: "p19",
    title: "Детали интерьера",
    category: "other",
    w: 1460,
    h: 1781,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a44fcd85662f.jpg",
    alt: "Детали интерьера — корпусная мебель и свет",
  },
  {
    id: "p20",
    title: "Мягкая мебель — фокус",
    category: "upholstered",
    w: 839,
    h: 1261,
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bb946b3ccf05.jpg",
    alt: "Мягкая мебель крупным планом",
  },
];

/** Категории каталога — только направления, подтверждённые публичными публикациями компании. */
export const catalogCategories = [
  {
    id: "custom-cabinetry",
    title: "Корпусная мебель",
    description:
      "Кухни, шкафы, гардеробные и другие корпусные решения, спроектированные под ваше помещение.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4c80448759d8.jpg",
    alt: "Корпусная мебель на заказ",
    relatedPortfolio: ["p1", "p2", "p15", "p16"],
  },
  {
    id: "upholstered",
    title: "Мягкая мебель",
    description: "Диваны, кресла и мягкая мебель, изготовленные по индивидуальному проекту.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a16e4098f2c5.jpg",
    alt: "Мягкая мебель на заказ",
    relatedPortfolio: ["p10", "p11", "p20"],
  },
  {
    id: "custom",
    title: "Мебель на заказ",
    description: "Полный цикл — от идеи и дизайна до изготовления, доставки и установки.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ee6365e97994.jpg",
    alt: "Мебель на заказ",
    relatedPortfolio: ["p3", "p7", "p19"],
  },
  {
    id: "kitchen",
    title: "Кухонные решения",
    description: "Кухни на заказ — с учётом эргономики, хранения и стиля пространства.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e4b7cdd0b71b.png",
    alt: "Кухонные решения на заказ",
    relatedPortfolio: ["p1", "p2", "p3", "p4"],
  },
  {
    id: "bedroom",
    title: "Спальни",
    description: "Мебель для спальни — кровати, изголовья, прикроватные решения и хранение.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4fe25cda8c9b.jpg",
    alt: "Мебель для спальни",
    relatedPortfolio: ["p5", "p6", "p7"],
  },
  {
    id: "living",
    title: "Гостиные",
    description: "Мебель и мягкие зоны для гостиной — стильные и комфортные решения.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dcedff8c9d17.jpg",
    alt: "Мебель для гостиной",
    relatedPortfolio: ["p8", "p9"],
  },
  {
    id: "wardrobe",
    title: "Шкафы",
    description: "Шкафы и гардеробные на заказ — продуманная организация хранения.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/581044338b46.jpg",
    alt: "Шкафы и гардеробные на заказ",
    relatedPortfolio: ["p12", "p13", "p14"],
  },
  {
    id: "individual",
    title: "Индивидуальные проекты",
    description: "Нестандартные задачи — с проработкой дизайна, эргономики и деталей исполнения.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a44fcd85662f.jpg",
    alt: "Индивидуальные мебельные проекты",
    relatedPortfolio: ["p17", "p18", "p19"],
  },
];

export const heroSlides = [
  {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/dcedff8c9d17.jpg",
    alt: "Интерьер с мягкой мебелью — KAYHON MEBEL",
    w: 8688,
    h: 4887,
  },
  {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e4b7cdd0b71b.png",
    alt: "Кухонное решение — KAYHON MEBEL",
    w: 1828,
    h: 1215,
  },
  {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4fe25cda8c9b.jpg",
    alt: "Спальня — KAYHON MEBEL",
    w: 4000,
    h: 6000,
  },
];

export const aboutGallery = [
  {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ee6365e97994.jpg",
    alt: "Корпусная композиция",
    w: 1768,
    h: 2308,
  },
  {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a16e4098f2c5.jpg",
    alt: "Мягкая мебель",
    w: 1500,
    h: 1500,
  },
  {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4c80448759d8.jpg",
    alt: "Корпусная мебель в интерьере",
    w: 1600,
    h: 900,
  },
  {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/581044338b46.jpg",
    alt: "Гардеробная",
    w: 1844,
    h: 2500,
  },
];
