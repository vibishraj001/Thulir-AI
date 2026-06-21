/**
 * CineMatch - Smart Movie Recommendation Engine
 * Core Application Logic
 */

// --- 1. MOVIE DATABASE (33 Curated Masterpieces) ---
const MOVIE_DATABASE = [
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    runtime: 148,
    rating: 8.8,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    genres: ["Sci-Fi", "Action", "Adventure"],
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    moods: ["think", "thrill"],
    genresQuiz: ["sci-fi", "action"],
    pace: "long",
    era: "millennial",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    runtime: 169,
    rating: 8.7,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    genres: ["Sci-Fi", "Drama", "Adventure"],
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival in the face of an eco-collapse on Earth.",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    moods: ["think", "emotional"],
    genresQuiz: ["sci-fi", "drama"],
    pace: "long",
    era: "millennial",
    streamingUrl: "https://www.primevideo.com"
  },
  {
    id: "dark-knight",
    title: "The Dark Knight",
    year: 2008,
    runtime: 152,
    rating: 9.0,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    genres: ["Action", "Crime", "Drama"],
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    moods: ["thrill", "think"],
    genresQuiz: ["action", "drama"],
    pace: "long",
    era: "millennial",
    streamingUrl: "https://www.hbo.com"
  },
  {
    id: "pulp-fiction",
    title: "Pulp Fiction",
    year: 1994,
    runtime: 154,
    rating: 8.9,
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    genres: ["Crime", "Drama"],
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80",
    moods: ["think", "thrill"],
    genresQuiz: ["drama", "action"],
    pace: "long",
    era: "classic",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "parasite",
    title: "Parasite",
    year: 2019,
    runtime: 132,
    rating: 8.5,
    director: "Bong Joon Ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    genres: ["Thriller", "Drama", "Comedy"],
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80",
    moods: ["think", "thrill"],
    genresQuiz: ["drama", "comedy"],
    pace: "medium",
    era: "modern",
    streamingUrl: "https://www.hulu.com"
  },
  {
    id: "whiplash",
    title: "Whiplash",
    year: 2014,
    runtime: 106,
    rating: 8.5,
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
    genres: ["Drama", "Music"],
    plot: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    poster: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional", "thrill"],
    genresQuiz: ["drama"],
    pace: "medium",
    era: "millennial",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "spider-verse-1",
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    runtime: 117,
    rating: 8.4,
    director: "Bob Persichetti",
    cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    plot: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80",
    moods: ["fun", "emotional"],
    genresQuiz: ["action", "sci-fi"],
    pace: "medium",
    era: "modern",
    streamingUrl: "https://www.disneyplus.com"
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    year: 2001,
    runtime: 125,
    rating: 8.6,
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    genres: ["Fantasy", "Adventure", "Drama"],
    plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional", "fun"],
    genresQuiz: ["sci-fi", "drama"],
    pace: "medium",
    era: "millennial",
    streamingUrl: "https://www.hbo.com"
  },
  {
    id: "grand-budapest",
    title: "The Grand Budapest Hotel",
    year: 2014,
    runtime: 99,
    rating: 8.1,
    director: "Wes Anderson",
    cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    genres: ["Comedy", "Adventure", "Drama"],
    plot: "A writer relates his adventures at a renowned European resort hotel between the first and second World Wars with a concierge who is wrongly framed for murder.",
    poster: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80",
    moods: ["fun", "think"],
    genresQuiz: ["comedy", "drama"],
    pace: "short",
    era: "millennial",
    streamingUrl: "https://www.disneyplus.com"
  },
  {
    id: "knives-out",
    title: "Knives Out",
    year: 2019,
    runtime: 130,
    rating: 7.9,
    director: "Rian Johnson",
    cast: ["Daniel Craig", "Chris Evans", "Ana de Armas"],
    genres: ["Mystery", "Comedy", "Crime"],
    plot: "A detective investigates the death of the patriarch of an eccentric, combative family.",
    poster: "https://images.unsplash.com/photo-1505775561242-727b7fdb20f0?auto=format&fit=crop&w=600&q=80",
    moods: ["fun", "think"],
    genresQuiz: ["comedy", "action"],
    pace: "medium",
    era: "modern",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "mad-max",
    title: "Mad Max: Fury Road",
    year: 2015,
    runtime: 120,
    rating: 8.1,
    director: "George Miller",
    cast: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    moods: ["thrill"],
    genresQuiz: ["action", "sci-fi"],
    pace: "medium",
    era: "modern",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "gladiator",
    title: "Gladiator",
    year: 2000,
    runtime: 155,
    rating: 8.5,
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    genres: ["Action", "Adventure", "Drama"],
    plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    poster: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional", "thrill"],
    genresQuiz: ["action", "drama"],
    pace: "long",
    era: "millennial",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "matrix",
    title: "The Matrix",
    year: 1999,
    runtime: 136,
    rating: 8.7,
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    genres: ["Sci-Fi", "Action"],
    plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    moods: ["think", "thrill"],
    genresQuiz: ["sci-fi", "action"],
    pace: "long",
    era: "classic",
    streamingUrl: "https://www.hbo.com"
  },
  {
    id: "good-will-hunting",
    title: "Good Will Hunting",
    year: 1997,
    runtime: 126,
    rating: 8.3,
    director: "Gus Van Sant",
    cast: ["Robin Williams", "Matt Damon", "Ben Affleck"],
    genres: ["Drama", "Romance"],
    plot: "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist in order to find direction in his life.",
    poster: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional"],
    genresQuiz: ["drama"],
    pace: "medium",
    era: "classic",
    streamingUrl: "https://www.primevideo.com"
  },
  {
    id: "shawshank",
    title: "The Shawshank Redemption",
    year: 1994,
    runtime: 142,
    rating: 9.3,
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    genres: ["Drama"],
    plot: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional"],
    genresQuiz: ["drama"],
    pace: "long",
    era: "classic",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "eternal-sunshine",
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    runtime: 108,
    rating: 8.3,
    director: "Michel Gondry",
    cast: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"],
    genres: ["Drama", "Romance", "Sci-Fi"],
    plot: "When their relationship turns sour, a young couple undergoes a medical procedure to have each other erased from their memories forever.",
    poster: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional", "think"],
    genresQuiz: ["sci-fi", "drama"],
    pace: "medium",
    era: "millennial",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "arrival",
    title: "Arrival",
    year: 2016,
    runtime: 116,
    rating: 7.9,
    director: "Denis Villeneuve",
    cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
    genres: ["Sci-Fi", "Mystery", "Drama"],
    plot: "A linguist works with the military to communicate with alien newcomers who have landed spacecrafts across the world.",
    poster: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80",
    moods: ["think", "emotional"],
    genresQuiz: ["sci-fi", "drama"],
    pace: "medium",
    era: "modern",
    streamingUrl: "https://www.primevideo.com"
  },
  {
    id: "django",
    title: "Django Unchained",
    year: 2012,
    runtime: 165,
    rating: 8.4,
    director: "Quentin Tarantino",
    cast: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
    genres: ["Western", "Drama", "Action"],
    plot: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80",
    moods: ["thrill", "emotional"],
    genresQuiz: ["action", "drama"],
    pace: "long",
    era: "millennial",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "everything-everywhere",
    title: "Everything Everywhere All at Once",
    year: 2022,
    runtime: 139,
    rating: 8.7,
    director: "Daniel Kwan",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
    genres: ["Sci-Fi", "Comedy", "Action", "Adventure"],
    plot: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    poster: "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=600&q=80",
    moods: ["think", "fun", "emotional"],
    genresQuiz: ["sci-fi", "comedy", "action"],
    pace: "long",
    era: "modern",
    streamingUrl: "https://www.hulu.com"
  },
  {
    id: "dune-2",
    title: "Dune: Part Two",
    year: 2024,
    runtime: 166,
    rating: 8.6,
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    genres: ["Sci-Fi", "Action", "Adventure"],
    plot: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    poster: "https://images.unsplash.com/photo-1547483238-f400e65ccd56?auto=format&fit=crop&w=600&q=80",
    moods: ["think", "thrill"],
    genresQuiz: ["sci-fi", "action"],
    pace: "long",
    era: "modern",
    streamingUrl: "https://www.hbo.com"
  },
  {
    id: "inside-out",
    title: "Inside Out",
    year: 2015,
    runtime: 95,
    rating: 8.1,
    director: "Pete Docter",
    cast: ["Amy Poehler", "Phyllis Smith", "Richard Kind"],
    genres: ["Animation", "Comedy", "Drama"],
    plot: "After a young girl is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    poster: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional", "fun"],
    genresQuiz: ["comedy", "drama"],
    pace: "short",
    era: "modern",
    streamingUrl: "https://www.disneyplus.com"
  },
  {
    id: "casablanca",
    title: "Casablanca",
    year: 1942,
    runtime: 102,
    rating: 8.5,
    director: "Michael Curtiz",
    cast: ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"],
    genres: ["Drama", "Romance", "War"],
    plot: "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
    poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional"],
    genresQuiz: ["drama"],
    pace: "medium",
    era: "classic",
    streamingUrl: "https://www.primevideo.com"
  },
  {
    id: "se7en",
    title: "Seven",
    year: 1995,
    runtime: 127,
    rating: 8.6,
    director: "David Fincher",
    cast: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
    genres: ["Crime", "Mystery", "Thriller"],
    plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    poster: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?auto=format&fit=crop&w=600&q=80",
    moods: ["thrill", "think"],
    genresQuiz: ["action"],
    pace: "medium",
    era: "classic",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "shutter-island",
    title: "Shutter Island",
    year: 2010,
    runtime: 138,
    rating: 8.2,
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
    genres: ["Mystery", "Thriller"],
    plot: "Teddy Daniels, a U.S. Marshal, struggles to find the truth behind the disappearance of a patient from Shutter Island's psychiatric facility, unraveling dark secrets.",
    poster: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    moods: ["think", "thrill"],
    genresQuiz: ["action"],
    pace: "long",
    era: "millennial",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "superbad",
    title: "Superbad",
    year: 2007,
    runtime: 113,
    rating: 7.6,
    director: "Greg Mottola",
    cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
    genres: ["Comedy"],
    plot: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-filled party goes awry.",
    poster: "https://images.unsplash.com/photo-1522819811119-09f02931a74d?auto=format&fit=crop&w=600&q=80",
    moods: ["fun"],
    genresQuiz: ["comedy"],
    pace: "medium",
    era: "millennial",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "spider-verse-2",
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    runtime: 140,
    rating: 8.6,
    director: "Joaquim Dos Santos",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    plot: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When they clash, Miles must redefine what it means to be a hero.",
    poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    moods: ["thrill", "fun", "emotional"],
    genresQuiz: ["action", "sci-fi", "comedy"],
    pace: "long",
    era: "modern",
    streamingUrl: "https://www.disneyplus.com"
  },
  {
    id: "truman-show",
    title: "The Truman Show",
    year: 1998,
    runtime: 103,
    rating: 8.1,
    director: "Peter Weir",
    cast: ["Jim Carrey", "Laura Linney", "Noah Emmerich"],
    genres: ["Drama", "Comedy"],
    plot: "An insurance salesman discovers his whole life is actually a reality TV show broadcasted globally, prompting him to plan a daring escape.",
    poster: "https://images.unsplash.com/photo-1542204172-e7052809f852?auto=format&fit=crop&w=600&q=80",
    moods: ["think", "emotional", "fun"],
    genresQuiz: ["drama", "comedy"],
    pace: "medium",
    era: "classic",
    streamingUrl: "https://www.hbo.com"
  },
  {
    id: "prisoners",
    title: "Prisoners",
    year: 2013,
    runtime: 153,
    rating: 8.1,
    director: "Denis Villeneuve",
    cast: ["Hugh Jackman", "Jake Gyllenhaal", "Viola Davis"],
    genres: ["Drama", "Mystery", "Thriller"],
    plot: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
    poster: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80",
    moods: ["thrill"],
    genresQuiz: ["drama"],
    pace: "long",
    era: "millennial",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "before-sunrise",
    title: "Before Sunrise",
    year: 1995,
    runtime: 101,
    rating: 8.1,
    director: "Richard Linklater",
    cast: ["Ethan Hawke", "Julie Delpy", "Andrea Eckert"],
    genres: ["Drama", "Romance"],
    plot: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna, knowing it will probably be their only night.",
    poster: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional"],
    genresQuiz: ["drama"],
    pace: "medium",
    era: "classic",
    streamingUrl: "https://www.primevideo.com"
  },
  {
    id: "lion-king",
    title: "The Lion King",
    year: 1994,
    runtime: 88,
    rating: 8.5,
    director: "Roger Allers",
    cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    genres: ["Animation", "Adventure", "Drama"],
    plot: "Lion cub Simba flees his kingdom after the murder of his father, Mufasa, only to learn the true meaning of responsibility and valor in adulthood.",
    poster: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional", "fun"],
    genresQuiz: ["comedy", "drama"],
    pace: "short",
    era: "classic",
    streamingUrl: "https://www.disneyplus.com"
  },
  {
    id: "la-la-land",
    title: "La La Land",
    year: 2016,
    runtime: 128,
    rating: 8.0,
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt"],
    genres: ["Comedy", "Drama", "Romance"],
    plot: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    moods: ["emotional", "fun"],
    genresQuiz: ["comedy", "drama"],
    pace: "medium",
    era: "modern",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "nightcrawler",
    title: "Nightcrawler",
    year: 2014,
    runtime: 118,
    rating: 7.8,
    director: "Dan Gilroy",
    cast: ["Jake Gyllenhaal", "Rene Russo", "Bill Paxton"],
    genres: ["Action", "Crime", "Drama"],
    plot: "When Louis Bloom, a con man desperate for work, muscles into the world of L.A. freelance crime journalism, he blurs the line between observer and participant.",
    poster: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    moods: ["thrill", "think"],
    genresQuiz: ["action", "drama"],
    pace: "medium",
    era: "millennial",
    streamingUrl: "https://www.netflix.com"
  },
  {
    id: "get-out",
    title: "Get Out",
    year: 2017,
    runtime: 104,
    rating: 7.7,
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford"],
    genres: ["Horror", "Mystery", "Thriller"],
    plot: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception eventually reaches a boiling point.",
    poster: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=600&q=80",
    moods: ["thrill", "think"],
    genresQuiz: ["action"],
    pace: "medium",
    era: "modern",
    streamingUrl: "https://www.primevideo.com"
  }
];

// --- 2. GLOBAL APP STATE ---
const STATE = {
  currentQuizStep: 1,
  quizAnswers: {
    mood: null,
    genre: null,
    runtime: null,
    era: null
  },
  watchlist: [],
  searchQuery: "",
  activeGenreFilter: "all",
  activeSort: "rating",
  activeTrailerMovieId: null,
  simulatedTrailerTimer: null,
  simulatedTrailerSeconds: 0,
  simulatedTrailerIsPlaying: false,
  simulatedTrailerIsMuted: false,
  user: null
};

// --- 3. DOM ELEMENT CACHE ---
const DOM = {
  // Navigation
  header: document.getElementById("main-header"),
  navLinks: document.querySelectorAll(".nav-link"),
  watchlistToggleBtn: document.getElementById("watchlist-toggle-btn"),
  watchlistBadge: document.getElementById("watchlist-badge"),
  mobileMenuToggle: document.getElementById("mobile-menu-toggle"),
  navMenu: document.getElementById("nav-links"),
  
  // Hero
  surpriseMeBtn: document.getElementById("surprise-me-btn"),
  moviesCountStat: document.getElementById("stat-movies-count"),
  
  // Quiz
  quizContainer: document.getElementById("quiz-container"),
  quizSteps: document.querySelectorAll(".quiz-step"),
  progressSteps: document.querySelectorAll(".progress-step"),
  quizProgressLine: document.getElementById("quiz-progress-line"),
  quizBtnPrev: document.getElementById("quiz-btn-prev"),
  quizBtnNext: document.getElementById("quiz-btn-next"),
  quizStepInfo: document.getElementById("quiz-step-info"),
  optionCards: document.querySelectorAll(".option-card"),
  quizResults: document.getElementById("quiz-results"),
  recommendationsGrid: document.getElementById("recommendations-grid"),
  quizResetBtn: document.getElementById("quiz-reset-btn"),
  
  // Browse / Catalog
  searchInput: document.getElementById("search-input"),
  genreFilters: document.getElementById("genre-filters"),
  sortSelect: document.getElementById("sort-select"),
  catalogGrid: document.getElementById("catalog-grid"),
  
  // Watchlist Side-Drawer
  watchlistDrawer: document.getElementById("watchlist-drawer"),
  watchlistOverlay: document.getElementById("watchlist-overlay"),
  watchlistCloseBtn: document.getElementById("watchlist-close-btn"),
  watchlistItemsContainer: document.getElementById("watchlist-items-container"),
  
  // Details Modal
  detailsModal: document.getElementById("details-modal"),
  modalCloseBtn: document.getElementById("modal-close-btn"),
  modalPoster: document.getElementById("modal-movie-poster"),
  modalRating: document.querySelector("#modal-movie-rating span"),
  modalYear: document.getElementById("modal-movie-year"),
  modalRuntime: document.getElementById("modal-movie-runtime"),
  modalTitle: document.getElementById("modal-movie-title"),
  modalGenres: document.getElementById("modal-movie-genres"),
  modalPlot: document.getElementById("modal-movie-plot"),
  modalDirector: document.getElementById("modal-movie-director"),
  modalCast: document.getElementById("modal-movie-cast"),
  modalWatchlistBtn: document.getElementById("modal-watchlist-btn"),
  modalWatchNowBtn: document.getElementById("modal-watch-now"),
  
  // Simulated Trailer Player
  trailerPlayToggle: document.getElementById("trailer-play-toggle"),
  trailerMuteToggle: document.getElementById("trailer-mute-toggle"),
  trailerBigPlay: document.getElementById("trailer-big-play"),
  trailerProgressFill: document.getElementById("trailer-progress-fill"),
  trailerProgressWrapper: document.getElementById("trailer-progress-wrapper"),
  trailerTimeDisplay: document.getElementById("trailer-time-display"),
  trailerStatus: document.getElementById("trailer-status"),
  trailerEq: document.getElementById("trailer-eq"),
  
  // Toast notifications
  toastContainer: document.getElementById("toast-container"),
  
  // Footer
  newsletterForm: document.getElementById("newsletter-form"),
  newsletterEmail: document.getElementById("newsletter-email"),
  footerSurpriseLink: document.getElementById("footer-surprise-link"),
  footerWatchlistLink: document.getElementById("footer-watchlist-link"),
  
  // Auth Modal
  authModal: document.getElementById("auth-modal"),
  authCloseBtn: document.getElementById("auth-close-btn"),
  signinNavBtn: document.getElementById("signin-nav-btn"),
  userProfileMenu: document.getElementById("user-profile-menu"),
  tabLogin: document.getElementById("tab-login"),
  tabRegister: document.getElementById("tab-register"),
  formLogin: document.getElementById("form-login"),
  formRegister: document.getElementById("form-register"),
  loginEmail: document.getElementById("login-email"),
  loginPassword: document.getElementById("login-password"),
  registerName: document.getElementById("register-name"),
  registerEmail: document.getElementById("register-email"),
  registerPassword: document.getElementById("register-password")
};

// --- 4. TOAST NOTIFICATIONS ---
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "fa-circle-check";
  if (type === "info") icon = "fa-circle-info";
  if (type === "warning") icon = "fa-triangle-exclamation";
  
  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${message}</span>
  `;
  
  DOM.toastContainer.appendChild(toast);
  
  // Fade out
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// --- 5. INITIALIZATION ---
function initApp() {
  // Update stats counter with actual database length dynamically
  if (DOM.moviesCountStat) {
    DOM.moviesCountStat.textContent = `${MOVIE_DATABASE.length}+`;
  }
  
  // Load Watchlist from LocalStorage
  loadWatchlist();
  
  // Load User from LocalStorage
  loadUserState();
  
  // Initial Catalog Render
  renderCatalog();
  
  // Setup Event Listeners
  setupEventListeners();
  
  // Set header sticky on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      DOM.header.classList.add("scrolled");
    } else {
      DOM.header.classList.remove("scrolled");
    }
    
    // Update active nav link based on scroll section
    detectActiveSection();
  });
}

// --- 6. WATCHLIST CONTROLLER ---
function loadWatchlist() {
  const saved = localStorage.getItem("cinematch_watchlist");
  if (saved) {
    try {
      STATE.watchlist = JSON.parse(saved);
    } catch (e) {
      STATE.watchlist = [];
    }
  }
  updateWatchlistUI();
}

function saveWatchlist() {
  localStorage.setItem("cinematch_watchlist", JSON.stringify(STATE.watchlist));
  updateWatchlistUI();
  // Sync grids
  renderCatalog();
  if (STATE.quizAnswers.mood) {
    // If recommendation results are showing, refresh them
    calculateRecommendations();
  }
}

function toggleWatchlist(movieId) {
  const index = STATE.watchlist.indexOf(movieId);
  const movie = MOVIE_DATABASE.find(m => m.id === movieId);
  
  if (index === -1) {
    STATE.watchlist.push(movieId);
    showToast(`Added "${movie.title}" to watchlist!`);
  } else {
    STATE.watchlist.splice(index, 1);
    showToast(`Removed "${movie.title}" from watchlist.`, "info");
  }
  saveWatchlist();
}

function updateWatchlistUI() {
  const count = STATE.watchlist.length;
  DOM.watchlistBadge.textContent = count;
  DOM.watchlistBadge.style.display = count > 0 ? "flex" : "none";
  
  // Populate Drawer
  DOM.watchlistItemsContainer.innerHTML = "";
  
  if (count === 0) {
    DOM.watchlistItemsContainer.innerHTML = `
      <div class="watchlist-empty">
        <i class="fa-solid fa-heart-crack watchlist-empty-icon"></i>
        <p>Your watchlist is empty.</p>
        <span style="font-size: 0.8rem; color: var(--text-muted);">Click the heart icon on any movie to save it for later.</span>
      </div>
    `;
    return;
  }
  
  STATE.watchlist.forEach(id => {
    const movie = MOVIE_DATABASE.find(m => m.id === id);
    if (!movie) return;
    
    const item = document.createElement("div");
    item.className = "watchlist-item";
    item.innerHTML = `
      <div class="watchlist-item-poster">
        <img src="${movie.poster}" alt="${movie.title} poster representation" loading="lazy">
      </div>
      <div class="watchlist-item-details">
        <div>
          <h4 class="watchlist-item-title">${movie.title}</h4>
          <span class="watchlist-item-meta">${movie.year} &bull; ${movie.runtime}m &bull; ${movie.genres.join(", ")}</span>
        </div>
        <div class="watchlist-item-actions">
          <button class="view-watchlist-item-btn" data-id="${movie.id}">
            <i class="fa-solid fa-eye"></i> Details
          </button>
          <button class="remove-watchlist-btn" data-id="${movie.id}">
            <i class="fa-solid fa-trash-can"></i> Remove
          </button>
        </div>
      </div>
    `;
    DOM.watchlistItemsContainer.appendChild(item);
  });
  
  // Bind events inside drawer
  DOM.watchlistItemsContainer.querySelectorAll(".view-watchlist-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      openDetailsModal(btn.dataset.id);
      closeWatchlistDrawer();
    });
  });
  
  DOM.watchlistItemsContainer.querySelectorAll(".remove-watchlist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      toggleWatchlist(btn.dataset.id);
    });
  });
}

function openWatchlistDrawer() {
  DOM.watchlistDrawer.classList.add("open");
  DOM.watchlistOverlay.classList.add("open");
  document.body.style.overflow = "hidden"; // disable scroll
}

function closeWatchlistDrawer() {
  DOM.watchlistDrawer.classList.remove("open");
  DOM.watchlistOverlay.classList.remove("open");
  document.body.style.overflow = ""; // enable scroll
}

// --- 7. SMART DISCOVERY QUIZ CONTROLLER ---
function setStep(stepNum) {
  STATE.currentQuizStep = stepNum;
  
  // Update Steps classes
  DOM.quizSteps.forEach(step => {
    step.classList.toggle("active", parseInt(step.dataset.step) === stepNum);
  });
  
  DOM.progressSteps.forEach(step => {
    const sVal = parseInt(step.dataset.step);
    step.classList.toggle("active", sVal === stepNum);
    step.classList.toggle("completed", sVal < stepNum);
  });
  
  // Progress line width
  const progressPercent = ((stepNum - 1) / (DOM.quizSteps.length - 1)) * 100;
  DOM.quizProgressLine.style.width = `${progressPercent}%`;
  
  // Prev button state
  DOM.quizBtnPrev.disabled = stepNum === 1;
  
  // Next/Finish button label
  if (stepNum === DOM.quizSteps.length) {
    DOM.quizBtnNext.innerHTML = `Reveal Matches <i class="fa-solid fa-wand-magic-sparkles"></i>`;
  } else {
    DOM.quizBtnNext.innerHTML = `Next <i class="fa-solid fa-arrow-right"></i>`;
  }
  
  DOM.quizStepInfo.textContent = `Step ${stepNum} of ${DOM.quizSteps.length}`;
}

function handleOptionSelection(optionCard) {
  const key = optionCard.dataset.key;
  const value = optionCard.dataset.value;
  
  // Clear other selections in the same step
  const siblings = optionCard.closest(".quiz-step").querySelectorAll(".option-card");
  siblings.forEach(c => c.classList.remove("selected"));
  
  // Select this card
  optionCard.classList.add("selected");
  
  // Save answer
  STATE.quizAnswers[key] = value;
}

function handleNextStep() {
  const currentStepElement = document.querySelector(`.quiz-step[data-step="${STATE.currentQuizStep}"]`);
  const selected = currentStepElement.querySelector(".option-card.selected");
  
  if (!selected) {
    showToast("Please select an option to proceed.", "warning");
    return;
  }
  
  if (STATE.currentQuizStep === DOM.quizSteps.length) {
    // Finish Quiz
    calculateRecommendations();
  } else {
    setStep(STATE.currentQuizStep + 1);
  }
}

function calculateRecommendations() {
  const answers = STATE.quizAnswers;
  
  // Calculate matching scores for each movie
  const matchedMovies = MOVIE_DATABASE.map(movie => {
    let score = 0;
    let reasons = [];
    
    // 1. Mood match (Max 35 points)
    if (movie.moods.includes(answers.mood)) {
      score += 35;
      if (answers.mood === "think") reasons.push("intellectually engaging plot");
      if (answers.mood === "thrill") reasons.push("heart-pounding, intense rhythm");
      if (answers.mood === "emotional") reasons.push("powerful emotional resonance");
      if (answers.mood === "fun") reasons.push("relaxing, vibrant tone");
    } else {
      // Overlapping secondary match
      const commonMood = movie.moods.filter(m => m !== answers.mood);
      if (commonMood.length > 0) {
        score += 15;
      }
    }
    
    // 2. Genre Match (Max 30 points)
    if (movie.genresQuiz.includes(answers.genre)) {
      score += 30;
      reasons.push(`signature elements of ${movie.genres[0]}`);
    } else {
      // Check general genres
      const isGenreOverlap = movie.genres.some(g => {
        const check = g.toLowerCase();
        if (answers.genre === "sci-fi" && (check.includes("sci-fi") || check.includes("fantasy") || check.includes("animation"))) return true;
        if (answers.genre === "drama" && (check.includes("drama") || check.includes("romance") || check.includes("history"))) return true;
        if (answers.genre === "action" && (check.includes("action") || check.includes("thriller") || check.includes("crime"))) return true;
        if (answers.genre === "comedy" && (check.includes("comedy") || check.includes("adventure") || check.includes("family"))) return true;
        return false;
      });
      if (isGenreOverlap) score += 15;
    }
    
    // 3. Runtime Match (Max 20 points)
    if (movie.pace === answers.runtime) {
      score += 20;
      if (answers.runtime === "short") reasons.push("fast-moving narrative length");
      if (answers.runtime === "medium") reasons.push("ideally budgeted storytelling time");
      if (answers.runtime === "long") reasons.push("grand epic world-building scope");
    } else {
      // Adjacent size
      if ((answers.runtime === "medium" && (movie.pace === "short" || movie.pace === "long")) ||
          (movie.pace === "medium")) {
        score += 10;
      }
    }
    
    // 4. Era Match (Max 15 points)
    if (movie.era === answers.era) {
      score += 15;
      if (answers.era === "modern") reasons.push("state-of-the-art modern aesthetics");
      if (answers.era === "millennial") reasons.push("influential early-millennium styling");
      if (answers.era === "classic") reasons.push("treasured vintage charm");
    } else {
      score += 5; // general baseline
    }
    
    // Cap score at 100
    const finalScore = Math.min(100, score);
    
    // Custom reasoning compilation
    let customReasoning = "Matches your current mood and style preference.";
    if (reasons.length >= 2) {
      customReasoning = `Perfect fit featuring a ${reasons[0]} and ${reasons[1]}.`;
    } else if (reasons.length === 1) {
      customReasoning = `Features a ${reasons[0]} that aligns with your criteria.`;
    }
    
    return {
      movie,
      score: finalScore,
      reasoning: customReasoning
    };
  });
  
  // Sort by score (descending), then by rating (descending) to ensure quality
  const topMatches = matchedMovies
    .filter(item => item.score >= 50)
    .sort((a, b) => b.score - a.score || b.movie.rating - a.movie.rating)
    .slice(0, 3);
    
  renderRecommendations(topMatches);
}

function renderRecommendations(matches) {
  DOM.recommendationsGrid.innerHTML = "";
  
  if (matches.length === 0) {
    DOM.recommendationsGrid.innerHTML = `
      <div class="no-results" style="grid-column: 1/-1;">
        <i class="fa-solid fa-face-frown no-results-icon"></i>
        <h3>No Perfect Matches Found</h3>
        <p>Try expanding your selection parameters. We couldn't find a film that scored high enough.</p>
      </div>
    `;
  } else {
    matches.forEach(item => {
      const m = item.movie;
      const inWatchlist = STATE.watchlist.includes(m.id);
      const wlClass = inWatchlist ? "match-card-watchlist in-watchlist" : "match-card-watchlist";
      const wlIcon = inWatchlist ? "fa-solid fa-heart" : "fa-regular fa-heart";
      
      const card = document.createElement("article");
      card.className = "match-card glass";
      card.innerHTML = `
        <div class="match-badge">${item.score}% Match</div>
        <div class="match-poster-wrapper">
          <img src="${m.poster}" alt="${m.title} poster representation" loading="lazy">
          <button class="${wlClass}" data-id="${m.id}" aria-label="Toggle Watchlist">
            <i class="${wlIcon}"></i>
          </button>
        </div>
        <div class="match-details">
          <div class="match-meta">
            <span>${m.year}</span>
            <span><i class="fa-solid fa-star" style="color:#ffb800"></i> ${m.rating}</span>
            <span>${m.runtime} mins</span>
          </div>
          <h4 class="match-title">${m.title}</h4>
          <p class="match-reason">${item.reasoning}</p>
          <div class="match-actions">
            <button class="btn btn-primary quiz-view-details-btn" data-id="${m.id}">
              <i class="fa-solid fa-circle-info"></i> Full Details
            </button>
          </div>
        </div>
      `;
      DOM.recommendationsGrid.appendChild(card);
    });
    
    // Bind detail click events
    DOM.recommendationsGrid.querySelectorAll(".quiz-view-details-btn").forEach(btn => {
      btn.addEventListener("click", () => openDetailsModal(btn.dataset.id));
    });
    
    // Bind watchlist toggle click events
    DOM.recommendationsGrid.querySelectorAll(".match-card-watchlist").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleWatchlist(btn.dataset.id);
      });
    });
  }
  
  // Hide Quiz Container, show Results
  DOM.quizContainer.style.display = "none";
  DOM.quizResults.style.display = "block";
  
  // Scroll to results header smoothly
  DOM.quizResults.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz() {
  STATE.currentQuizStep = 1;
  STATE.quizAnswers = { mood: null, genre: null, runtime: null, era: null };
  
  DOM.optionCards.forEach(c => c.classList.remove("selected"));
  setStep(1);
  
  DOM.quizResults.style.display = "none";
  DOM.quizContainer.style.display = "block";
  
  DOM.quizContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}

// --- 8. MOVIE CATALOG BROWSE CONTROLLER ---
function renderCatalog() {
  DOM.catalogGrid.innerHTML = "";
  
  // Filter by search query
  let filtered = MOVIE_DATABASE.filter(movie => {
    const query = STATE.searchQuery.toLowerCase();
    const matchesQuery = movie.title.toLowerCase().includes(query) ||
                         movie.director.toLowerCase().includes(query) ||
                         movie.genres.some(g => g.toLowerCase().includes(query)) ||
                         movie.cast.some(actor => actor.toLowerCase().includes(query));
                         
    const matchesGenre = STATE.activeGenreFilter === "all" || 
                         movie.genres.includes(STATE.activeGenreFilter);
                         
    return matchesQuery && matchesGenre;
  });
  
  // Sort movies
  filtered.sort((a, b) => {
    if (STATE.activeSort === "rating") {
      return b.rating - a.rating;
    }
    if (STATE.activeSort === "year-desc") {
      return b.year - a.year;
    }
    if (STATE.activeSort === "year-asc") {
      return a.year - b.year;
    }
    if (STATE.activeSort === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
  
  if (filtered.length === 0) {
    DOM.catalogGrid.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-triangle-exclamation no-results-icon"></i>
        <h3>No Movies Found</h3>
        <p>We couldn't find matches for "${STATE.searchQuery}" under ${STATE.activeGenreFilter} genre.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(m => {
    const inWatchlist = STATE.watchlist.includes(m.id);
    const wlClass = inWatchlist ? "movie-watchlist-btn in-watchlist" : "movie-watchlist-btn";
    const wlIcon = inWatchlist ? "fa-solid fa-heart" : "fa-regular fa-heart";
    
    const card = document.createElement("article");
    card.className = "movie-card";
    card.innerHTML = `
      <div class="movie-poster-container">
        <img class="movie-poster" src="${m.poster}" alt="${m.title} poster representation" loading="lazy">
        <div class="rating-badge">
          <i class="fa-solid fa-star"></i>
          <span>${m.rating}</span>
        </div>
        <button class="${wlClass}" data-id="${m.id}" aria-label="Toggle Watchlist">
          <i class="${wlIcon}"></i>
        </button>
      </div>
      <div class="movie-info">
        <span class="movie-year-genre">${m.year} &bull; ${m.genres[0]}</span>
        <h4 class="movie-card-title">${m.title}</h4>
        <div class="movie-card-actions">
          <button class="btn btn-secondary catalog-details-btn" data-id="${m.id}">
            View Details
          </button>
        </div>
      </div>
    `;
    DOM.catalogGrid.appendChild(card);
  });
  
  // Bind details buttons inside catalog
  DOM.catalogGrid.querySelectorAll(".catalog-details-btn").forEach(btn => {
    btn.addEventListener("click", () => openDetailsModal(btn.dataset.id));
  });
  
  // Bind watchlist toggle buttons
  DOM.catalogGrid.querySelectorAll(".movie-watchlist-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleWatchlist(btn.dataset.id);
    });
  });
}

function handleSearch(e) {
  STATE.searchQuery = e.target.value;
  renderCatalog();
}

function handleGenreFilter(btn) {
  DOM.genreFilters.querySelectorAll(".genre-tag").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  STATE.activeGenreFilter = btn.dataset.genre;
  renderCatalog();
}

function handleSort(e) {
  STATE.activeSort = e.target.value;
  renderCatalog();
}

// --- 9. DETAILS MODAL & SIMULATED TRAILER CONTROLLER ---
function openDetailsModal(movieId) {
  const m = MOVIE_DATABASE.find(movie => movie.id === movieId);
  if (!m) return;
  
  STATE.activeTrailerMovieId = movieId;
  
  // Populate text and details
  DOM.modalPoster.src = m.poster;
  DOM.modalPoster.alt = `${m.title} poster representation`;
  DOM.modalRating.textContent = `${m.rating} / 10`;
  DOM.modalYear.textContent = m.year;
  DOM.modalRuntime.textContent = `${m.runtime} mins`;
  DOM.modalTitle.textContent = m.title;
  DOM.modalPlot.textContent = m.plot;
  DOM.modalDirector.textContent = m.director;
  DOM.modalCast.textContent = m.cast.join(", ");
  
  // Genres tags
  DOM.modalGenres.innerHTML = "";
  m.genres.forEach(g => {
    const tag = document.createElement("span");
    tag.className = "modal-genre-tag";
    tag.textContent = g;
    DOM.modalGenres.appendChild(tag);
  });
  
  // Watchlist action button syncing
  updateModalWatchlistBtn(movieId);
  
  // Reset simulated video player state
  resetSimulatedTrailer();
  
  // Show Modal
  DOM.detailsModal.classList.add("open");
  document.body.style.overflow = "hidden"; // lock scroll
}

function closeDetailsModal() {
  DOM.detailsModal.classList.remove("open");
  document.body.style.overflow = ""; // unlock scroll
  resetSimulatedTrailer();
}

function updateModalWatchlistBtn(movieId) {
  const inWatchlist = STATE.watchlist.includes(movieId);
  if (inWatchlist) {
    DOM.modalWatchlistBtn.className = "btn btn-secondary";
    DOM.modalWatchlistBtn.innerHTML = `<i class="fa-solid fa-heart-broken" style="color: #ff3366;"></i> Remove Watchlist`;
  } else {
    DOM.modalWatchlistBtn.className = "btn btn-primary";
    DOM.modalWatchlistBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add to Watchlist`;
  }
}

// Simulated Trailer Player Actions
function resetSimulatedTrailer() {
  clearInterval(STATE.simulatedTrailerTimer);
  STATE.simulatedTrailerTimer = null;
  STATE.simulatedTrailerSeconds = 0;
  STATE.simulatedTrailerIsPlaying = false;
  
  DOM.trailerBigPlay.style.display = "flex";
  DOM.trailerPlayToggle.innerHTML = `<i class="fa-solid fa-play"></i>`;
  DOM.trailerProgressFill.style.width = "0%";
  DOM.trailerTimeDisplay.textContent = "00:00";
  
  DOM.trailerStatus.innerHTML = `<span></span>Ready`;
  DOM.trailerStatus.className = "trailer-status-tag";
  DOM.trailerEq.classList.remove("playing");
}

function toggleSimulatedTrailer() {
  if (STATE.simulatedTrailerIsPlaying) {
    // PAUSE
    STATE.simulatedTrailerIsPlaying = false;
    clearInterval(STATE.simulatedTrailerTimer);
    
    DOM.trailerBigPlay.style.display = "flex";
    DOM.trailerPlayToggle.innerHTML = `<i class="fa-solid fa-play"></i>`;
    DOM.trailerStatus.innerHTML = `<span></span>Paused`;
    DOM.trailerStatus.className = "trailer-status-tag";
    DOM.trailerEq.classList.remove("playing");
  } else {
    // PLAY
    STATE.simulatedTrailerIsPlaying = true;
    DOM.trailerBigPlay.style.display = "none";
    DOM.trailerPlayToggle.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    DOM.trailerStatus.innerHTML = `<span></span>Teaser Live`;
    DOM.trailerStatus.className = "trailer-status-tag playing";
    DOM.trailerEq.classList.add("playing");
    
    const maxDuration = 15; // Simulated 15 second teaser
    
    STATE.simulatedTrailerTimer = setInterval(() => {
      STATE.simulatedTrailerSeconds += 0.1;
      
      // Update Progress
      const pct = (STATE.simulatedTrailerSeconds / maxDuration) * 100;
      DOM.trailerProgressFill.style.width = `${pct}%`;
      
      // Update Timer Text
      const curSecs = Math.floor(STATE.simulatedTrailerSeconds);
      const strSecs = curSecs < 10 ? `0${curSecs}` : curSecs;
      DOM.trailerTimeDisplay.textContent = `00:${strSecs}`;
      
      if (STATE.simulatedTrailerSeconds >= maxDuration) {
        // Finished playing
        resetSimulatedTrailer();
        showToast("Teaser trailer completed. Click Watch Now to view full feature!", "info");
      }
    }, 100);
  }
}

function toggleTrailerMute() {
  STATE.simulatedTrailerIsMuted = !STATE.simulatedTrailerIsMuted;
  if (STATE.simulatedTrailerIsMuted) {
    DOM.trailerMuteToggle.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
    showToast("Teaser trailer muted.", "info");
  } else {
    DOM.trailerMuteToggle.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    showToast("Teaser trailer unmuted.", "info");
  }
}

function handleTrailerScrub(e) {
  if (!STATE.simulatedTrailerIsPlaying && STATE.simulatedTrailerSeconds === 0) return;
  const rect = DOM.trailerProgressWrapper.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const pct = Math.max(0, Math.min(1, clickX / width));
  
  STATE.simulatedTrailerSeconds = pct * 15; // Set time relative to 15s duration
  DOM.trailerProgressFill.style.width = `${pct * 100}%`;
  
  const curSecs = Math.floor(STATE.simulatedTrailerSeconds);
  const strSecs = curSecs < 10 ? `0${curSecs}` : curSecs;
  DOM.trailerTimeDisplay.textContent = `00:${strSecs}`;
}

// --- 10. SURPRISE ME ENGINE ---
function generateSurpriseMe() {
  // Add a nice spin/shuffle transition feedback
  showToast("Scanning library for a surprise masterpiece...", "info");
  
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * MOVIE_DATABASE.length);
    const movie = MOVIE_DATABASE[randomIndex];
    openDetailsModal(movie.id);
    showToast(`Surprise Pick: "${movie.title}" found!`, "success");
  }, 600);
}

// --- 11. EVENT BINDING MANAGER ---
function setupEventListeners() {
  // Mobile Navigation toggle
  DOM.mobileMenuToggle.addEventListener("click", () => {
    DOM.navMenu.classList.toggle("open");
    DOM.mobileMenuToggle.querySelector("i").classList.toggle("fa-bars");
    DOM.mobileMenuToggle.querySelector("i").classList.toggle("fa-xmark");
    
    // Quick inline overlay if open
    if (DOM.navMenu.classList.contains("open")) {
      DOM.navMenu.style.display = "flex";
      DOM.navMenu.style.flexDirection = "column";
      DOM.navMenu.style.position = "absolute";
      DOM.navMenu.style.top = "100%";
      DOM.navMenu.style.left = "0";
      DOM.navMenu.style.width = "100%";
      DOM.navMenu.style.background = "var(--bg-secondary)";
      DOM.navMenu.style.padding = "24px";
      DOM.navMenu.style.borderBottom = "1px solid var(--border-color)";
    } else {
      DOM.navMenu.style.display = "";
    }
  });
  
  // Watchlist buttons
  DOM.watchlistToggleBtn.addEventListener("click", openWatchlistDrawer);
  DOM.watchlistCloseBtn.addEventListener("click", closeWatchlistDrawer);
  DOM.watchlistOverlay.addEventListener("click", closeWatchlistDrawer);
  DOM.footerWatchlistLink.addEventListener("click", (e) => {
    e.preventDefault();
    openWatchlistDrawer();
  });
  
  // Hero Call To Actions
  DOM.surpriseMeBtn.addEventListener("click", generateSurpriseMe);
  DOM.footerSurpriseLink.addEventListener("click", (e) => {
    e.preventDefault();
    generateSurpriseMe();
  });
  
  // Navigation scrolling highlights
  DOM.navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      // Allow standard anchor jumping
      DOM.navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      // Close mobile menu if open
      if (DOM.navMenu.classList.contains("open")) {
        DOM.navMenu.classList.remove("open");
        DOM.navMenu.style.display = "";
        DOM.mobileMenuToggle.querySelector("i").className = "fa-solid fa-bars";
      }
    });
  });
  
  // Quiz: Options selection
  DOM.optionCards.forEach(card => {
    card.addEventListener("click", () => handleOptionSelection(card));
  });
  
  // Quiz: Navigation
  DOM.quizBtnNext.addEventListener("click", handleNextStep);
  DOM.quizBtnPrev.addEventListener("click", () => {
    if (STATE.currentQuizStep > 1) {
      setStep(STATE.currentQuizStep - 1);
    }
  });
  
  DOM.quizResetBtn.addEventListener("click", resetQuiz);
  
  // Browse filters
  DOM.searchInput.addEventListener("input", handleSearch);
  
  DOM.genreFilters.querySelectorAll(".genre-tag").forEach(btn => {
    btn.addEventListener("click", () => handleGenreFilter(btn));
  });
  
  // Quick filters in footer
  document.querySelectorAll(".footer-genre-quick").forEach(link => {
    link.addEventListener("click", (e) => {
      const genre = link.dataset.genre;
      const filterBtn = Array.from(DOM.genreFilters.querySelectorAll(".genre-tag")).find(b => b.dataset.genre === genre);
      if (filterBtn) {
        handleGenreFilter(filterBtn);
      }
    });
  });
  
  DOM.sortSelect.addEventListener("change", handleSort);
  
  // Details Modal close
  DOM.modalCloseBtn.addEventListener("click", closeDetailsModal);
  DOM.detailsModal.addEventListener("click", (e) => {
    if (e.target === DOM.detailsModal) closeDetailsModal();
  });
  
  // Modal Watchlist actions
  DOM.modalWatchlistBtn.addEventListener("click", () => {
    toggleWatchlist(STATE.activeTrailerMovieId);
    updateModalWatchlistBtn(STATE.activeTrailerMovieId);
  });
  
  DOM.modalWatchNowBtn.addEventListener("click", () => {
    const movie = MOVIE_DATABASE.find(m => m.id === STATE.activeTrailerMovieId);
    if (movie) {
      window.open(movie.streamingUrl, "_blank");
      showToast(`Redirecting to streaming portal for "${movie.title}"...`, "info");
    }
  });
  
  // Trailer media controls
  DOM.trailerBigPlay.addEventListener("click", toggleSimulatedTrailer);
  DOM.trailerPlayToggle.addEventListener("click", toggleSimulatedTrailer);
  DOM.trailerMuteToggle.addEventListener("click", toggleTrailerMute);
  DOM.trailerProgressWrapper.addEventListener("click", handleTrailerScrub);
  
  // Newsletter form submission
  DOM.newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = DOM.newsletterEmail.value;
    if (email) {
      showToast(`Subscription successful! Welcome to CineMatch updates.`, "success");
      DOM.newsletterEmail.value = "";
    }
  });
  
  // Auth Modal toggles
  if (DOM.signinNavBtn) {
    DOM.signinNavBtn.addEventListener("click", openAuthModal);
  }
  DOM.authCloseBtn.addEventListener("click", closeAuthModal);
  DOM.authModal.addEventListener("click", (e) => {
    if (e.target === DOM.authModal) closeAuthModal();
  });
  
  // Auth Tabs switching
  DOM.tabLogin.addEventListener("click", () => switchAuthTab("login"));
  DOM.tabRegister.addEventListener("click", () => switchAuthTab("register"));
  
  // Password Visibility toggle
  document.querySelectorAll(".password-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = btn.previousElementSibling;
      const icon = btn.querySelector("i");
      if (input.type === "password") {
        input.type = "text";
        icon.className = "fa-solid fa-eye";
      } else {
        input.type = "password";
        icon.className = "fa-solid fa-eye-slash";
      }
    });
  });
  
  // Auth Form submissions
  DOM.formLogin.addEventListener("submit", handleLoginSubmit);
  DOM.formRegister.addEventListener("submit", handleRegisterSubmit);
  
  // Close dropdown on click outside
  window.addEventListener("click", (e) => {
    const dropdown = document.getElementById("profile-dropdown-menu");
    const avatar = document.getElementById("profile-avatar-btn");
    if (dropdown && dropdown.classList.contains("open") && e.target !== avatar && !avatar.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
}

// --- 11. AUTH CONTROLLER ---
function openAuthModal() {
  DOM.authModal.classList.add("open");
  switchAuthTab("login");
  document.body.style.overflow = "hidden";
}

function closeAuthModal() {
  DOM.authModal.classList.remove("open");
  document.body.style.overflow = "";
  DOM.formLogin.reset();
  DOM.formRegister.reset();
}

function switchAuthTab(tabType) {
  if (tabType === "login") {
    DOM.tabLogin.classList.add("active");
    DOM.tabRegister.classList.remove("active");
    DOM.formLogin.classList.add("active");
    DOM.formRegister.classList.remove("active");
  } else {
    DOM.tabRegister.classList.add("active");
    DOM.tabLogin.classList.remove("active");
    DOM.formRegister.classList.add("active");
    DOM.formLogin.classList.remove("active");
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = DOM.loginEmail.value;
  const password = DOM.loginPassword.value;
  
  if (email && password) {
    // Generate a default name from the email prefix
    const namePrefix = email.split("@")[0];
    const capitalizedName = namePrefix.charAt(0).toUpperCase() + namePrefix.slice(1);
    
    STATE.user = {
      name: capitalizedName,
      email: email
    };
    
    localStorage.setItem("cinematch_user", JSON.stringify(STATE.user));
    updateUserNavUI();
    closeAuthModal();
    showToast(`Welcome back, ${STATE.user.name}!`);
  }
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = DOM.registerName.value;
  const email = DOM.registerEmail.value;
  const password = DOM.registerPassword.value;
  
  if (name && email && password) {
    STATE.user = {
      name: name,
      email: email
    };
    
    localStorage.setItem("cinematch_user", JSON.stringify(STATE.user));
    updateUserNavUI();
    closeAuthModal();
    showToast(`Account created successfully! Welcome, ${STATE.user.name}.`);
  }
}

function handleLogout() {
  STATE.user = null;
  localStorage.removeItem("cinematch_user");
  updateUserNavUI();
  showToast("Logged out successfully.", "info");
}

function loadUserState() {
  const savedUser = localStorage.getItem("cinematch_user");
  if (savedUser) {
    try {
      STATE.user = JSON.parse(savedUser);
    } catch (e) {
      STATE.user = null;
    }
  }
  updateUserNavUI();
}

function updateUserNavUI() {
  if (!DOM.userProfileMenu) return;
  
  DOM.userProfileMenu.innerHTML = "";
  
  if (!STATE.user) {
    DOM.userProfileMenu.innerHTML = `
      <button class="btn btn-accent" id="signin-nav-btn">
        <i class="fa-solid fa-user"></i> <span>Sign In</span>
      </button>
    `;
    
    // Re-bind sign-in click event
    document.getElementById("signin-nav-btn").addEventListener("click", openAuthModal);
  } else {
    // Get Initials (e.g. "John Doe" -> "JD")
    const names = STATE.user.name.split(" ");
    let initials = "";
    if (names.length >= 2) {
      initials = names[0].charAt(0) + names[1].charAt(0);
    } else if (names.length === 1) {
      initials = names[0].substring(0, 2);
    } else {
      initials = "U";
    }
    initials = initials.toUpperCase();
    
    DOM.userProfileMenu.innerHTML = `
      <div class="user-profile-avatar" id="profile-avatar-btn" title="View Profile">${initials}</div>
      <div class="user-profile-dropdown" id="profile-dropdown-menu">
        <div class="user-profile-header">
          <div class="user-profile-name">${STATE.user.name}</div>
          <div class="user-profile-email">${STATE.user.email}</div>
        </div>
        <button class="user-dropdown-item" id="btn-sync-watchlist">
          <i class="fa-solid fa-cloud-arrow-up"></i> Sync Watchlist
        </button>
        <button class="user-dropdown-item" id="btn-profile-logout">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out
        </button>
      </div>
    `;
    
    const avatarBtn = document.getElementById("profile-avatar-btn");
    const dropdownMenu = document.getElementById("profile-dropdown-menu");
    
    avatarBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle("open");
    });
    
    document.getElementById("btn-profile-logout").addEventListener("click", handleLogout);
    document.getElementById("btn-sync-watchlist").addEventListener("click", () => {
      showToast("Syncing watchlist with cloud database...", "info");
      setTimeout(() => {
        showToast("Sync complete! Watchlist is up to date.", "success");
        dropdownMenu.classList.remove("open");
      }, 1000);
    });
  }
}

// Active Nav highlight detector
function detectActiveSection() {
  const sections = [
    { id: "hero-section", linkId: "link-hero" },
    { id: "finder", linkId: "link-finder" },
    { id: "browse", linkId: "link-browse" }
  ];
  
  const scrollPos = window.scrollY + 120; // offset for sticky nav header height
  
  sections.forEach(sec => {
    const el = document.getElementById(sec.id);
    if (!el) return;
    
    const top = el.offsetTop;
    const height = el.offsetHeight;
    
    if (scrollPos >= top && scrollPos < top + height) {
      DOM.navLinks.forEach(link => {
        link.classList.toggle("active", link.id === sec.linkId);
      });
    }
  });
}

// --- 12. RUN INITIALIZER ON DOM READY ---
document.addEventListener("DOMContentLoaded", initApp);
