export type MusicEvent = {
  title: string;
  date: string;
  time: string;
  series: 'Tuesdays at Trinity' | 'Evensong Recital' | 'Special Event';
  performer?: string;
  venue: string;
  location: string;
  description: string;
  featured?: boolean;
};

const venue = 'Trinity Episcopal Church';
const location = 'Tulsa, Oklahoma';

export const tuesdaysAtTrinity: MusicEvent[] = [
  event('2025-09-02', '12:05 p.m.', 'Tuesdays at Trinity', 'Beau Baldwin', 'Organist - Cathedral of St. Andrew, Little Rock'),
  event('2025-09-09', '12:05 p.m.', 'Tuesdays at Trinity', 'Richard Jobe', 'Organist - Casady School, Oklahoma City'),
  event('2025-09-16', '12:05 p.m.', 'Tuesdays at Trinity', 'David Anderson', 'Organist - Christ the King Catholic Church, Oklahoma City'),
  event('2025-09-23', '12:05 p.m.', 'Tuesdays at Trinity', 'John Dixon', 'Organist - Providence Presbyterian, Virginia Beach, Virginia'),
  event('2025-09-30', '12:05 p.m.', 'Tuesdays at Trinity', 'Ann Boelzner', "Organist - St. Patrick's Episcopal Church"),
  event('2025-10-07', '12:05 p.m.', 'Tuesdays at Trinity', 'Ron Pearson', 'Organist - First Presbyterian Church'),
  event('2025-10-14', '12:05 p.m.', 'Tuesdays at Trinity', 'Casey Cantwell', 'Organist', true),
  event('2025-10-21', '12:05 p.m.', 'Tuesdays at Trinity', 'Tulsa Opera', 'Noonday concert'),
  event('2025-10-28', '12:05 p.m.', 'Tuesdays at Trinity', 'Chris and Rebecca Winston', 'Organist and soprano - Immanuel Lutheran Church'),
  event('2025-11-04', '12:05 p.m.', 'Tuesdays at Trinity', 'Thomas Starnes', 'Organist - Christ the King Catholic Church'),
  event('2025-11-11', '12:05 p.m.', 'Tuesdays at Trinity', 'Lorelei Barton and Cathy Venable', 'Harpist and mezzo-soprano'),
  event('2025-11-18', '12:05 p.m.', 'Tuesdays at Trinity', 'Evan Anderson', 'Organist - Boston Avenue United Methodist Church'),
  event('2025-11-25', '12:05 p.m.', 'Tuesdays at Trinity', 'Jazz Divas', 'Margaret Lee Sewell, Karen Gingrich, Donna Reneau, and Anne Roberts'),
  event('2025-12-02', '12:05 p.m.', 'Tuesdays at Trinity', 'The Trinity Recorder Consort', 'Noonday concert'),
  event('2025-12-09', '12:05 p.m.', 'Tuesdays at Trinity', 'Terry Cast', 'Organist - Kirk of the Hills Presbyterian Church'),
  event('2025-12-16', '12:05 p.m.', 'Tuesdays at Trinity', 'Kelly Ford and Cathy Venable', 'Tenor and pianist'),
  event('2026-01-06', '12:05 p.m.', 'Tuesdays at Trinity', 'Karen Gingrich', 'Soprano'),
  event('2026-01-13', '12:05 p.m.', 'Tuesdays at Trinity', 'Holland Hall Choir', 'Lauren Fogarty, director'),
  event('2026-01-20', '12:05 p.m.', 'Tuesdays at Trinity', 'Mary Ann Stewart and Lyndon Meyer', 'Soprano and pianist'),
  event('2026-01-27', '12:05 p.m.', 'Tuesdays at Trinity', 'Katie Meloan', 'Organist - First United Methodist Church, Wichita Falls, Texas'),
  event('2026-02-03', '12:05 p.m.', 'Tuesdays at Trinity', 'Michael Bedford', "Organist Emeritus - St. John's Episcopal Church"),
  event('2026-02-10', '12:05 p.m.', 'Tuesdays at Trinity', 'Tony Leon', 'Organist - St. Charles Borromeo Catholic Church, Oklahoma City'),
  event('2026-02-17', '12:05 p.m.', 'Tuesdays at Trinity', 'Brad Henderson', 'First Baptist Church'),
  event('2026-02-24', '12:05 p.m.', 'Tuesdays at Trinity', 'Vicki Smith and Cathy Venable', 'Organist and pianist'),
  event('2026-03-03', '12:05 p.m.', 'Tuesdays at Trinity', 'Marjoleine Gravley', 'Organist'),
  event('2026-03-10', '12:05 p.m.', 'Tuesdays at Trinity', 'Lyndon Meyer', 'Organist - Church of St. Mary'),
  event('2026-03-17', '12:05 p.m.', 'Tuesdays at Trinity', 'Stephen Jones', 'Tenor'),
  event('2026-03-24', '12:05 p.m.', 'Tuesdays at Trinity', 'Stephen Wurst', 'Organist - McFarlin United Methodist Church, Norman'),
  event('2026-03-31', '12:05 p.m.', 'Tuesdays at Trinity', 'Rebecca te Velde', 'Organist'),
  event('2026-04-07', '12:05 p.m.', 'Tuesdays at Trinity', 'Cappella Chamber Singers', 'The University of Tulsa - Dr. Kim Childs, director'),
  event('2026-04-14', '12:05 p.m.', 'Tuesdays at Trinity', 'Linda Paul', 'Harpist'),
  event('2026-04-21', '12:05 p.m.', 'Tuesdays at Trinity', 'Lise Glaser', 'Oboist'),
  event('2026-04-28', '12:05 p.m.', 'Tuesdays at Trinity', 'Anna Norberg', 'Pianist'),
  event('2026-05-05', '12:05 p.m.', 'Tuesdays at Trinity', 'Collinsville High School Choir', 'Michael Broyles, director'),
  event('2026-05-12', '12:05 p.m.', 'Tuesdays at Trinity', 'Dylan Madoux', 'Harpsichordist'),
  event('2026-05-19', '12:05 p.m.', 'Tuesdays at Trinity', 'Hank Carrillo', "Organist - St. John's Episcopal Church"),
  event('2026-05-26', '12:05 p.m.', 'Tuesdays at Trinity', 'Benjamin Henderson', 'Organist - First United Methodist Church, Fort Smith, Arkansas'),
];

export const evensongRecitals: MusicEvent[] = [
  event('2025-09-07', '4:30 p.m.', 'Evensong Recital', 'Casey Cantwell', 'Recital preceding Evensong', true),
  event('2025-09-21', '4:30 p.m.', 'Evensong Recital', 'William Schlueter', 'Recital preceding Evensong'),
  event('2025-10-19', '4:30 p.m.', 'Evensong Recital', 'Steve Fischer', 'Recital preceding Evensong'),
  event('2025-11-02', '4:30 p.m.', 'Evensong Recital', 'Alvez Barkoskie IV', 'Recital preceding Evensong'),
  event('2025-11-16', '4:30 p.m.', 'Evensong Recital', 'Vicki Schaeffer', 'Recital preceding Evensong'),
  event('2026-01-18', '4:30 p.m.', 'Evensong Recital', 'Daniel Taylor', 'Recital preceding Evensong'),
  event('2026-02-01', '4:30 p.m.', 'Evensong Recital', 'Casey Cantwell', 'Recital preceding Evensong', true),
  event('2026-02-15', '4:30 p.m.', 'Evensong Recital', 'Cody Lowrey', 'Recital preceding Evensong'),
  event('2026-03-01', '4:30 p.m.', 'Evensong Recital', 'Nolan Patrick Reilly', 'Recital preceding Evensong'),
  event('2026-03-15', '4:30 p.m.', 'Evensong Recital', 'Damin Spritzer', 'Recital preceding Evensong'),
  event('2026-04-19', '4:30 p.m.', 'Evensong Recital', 'Karen Rich', 'Recital preceding Evensong'),
  event('2026-05-03', '4:30 p.m.', 'Evensong Recital', 'Brad Newcomb', 'Recital preceding Evensong'),
  event('2026-05-17', '4:30 p.m.', 'Evensong Recital', 'Lorenz Maycher', 'Recital preceding Evensong'),
];

export const specialEvents: MusicEvent[] = [
  event('2025-09-27', '7:30 p.m.', 'Special Event', 'Tulsa Chorale', 'Voices of our Time: Contemporary American Composers'),
  event('2025-11-30', '5:00 p.m.', 'Special Event', 'Trinity Choirs', 'Advent Festival of Lessons and Carols'),
  event('2025-12-07', '5:00 p.m.', 'Special Event', 'Holland Hall', 'Holland Hall Lessons and Carols'),
  event('2025-12-21', '4:30 p.m.', 'Special Event', 'Organ and brass musicians', 'Christmas Organ and Brass Concert'),
  event('2026-04-14', '7:00 p.m.', 'Special Event', 'Monica Berney', 'The Twenty-fourth Annual Thomas Matthews Memorial Concert'),
  event('2026-04-24', '7:00 p.m.', 'Special Event', 'University of Tulsa Choirs', 'Dr. Kim Childs, director'),
];

export const sundayServiceMusic: MusicEvent[] = [
  ...evensongRecitals,
  ...specialEvents.filter((item) => isSunday(item.date)),
].sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

export const seasonEvents = [
  ...tuesdaysAtTrinity,
  ...evensongRecitals,
  ...specialEvents,
].sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));

export const featuredEvents = seasonEvents.filter((item) => item.featured);

export function formatMusicDate(date: string) {
  const parsed = new Date(`${date}T12:00:00`);
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(parsed);
}

function event(
  date: string,
  time: string,
  series: MusicEvent['series'],
  performer: string,
  description: string,
  featured = false,
): MusicEvent {
  return {
    title: performer,
    date,
    time,
    series,
    performer,
    venue,
    location,
    description,
    featured,
  };
}

function isSunday(date: string) {
  return new Date(`${date}T12:00:00`).getDay() === 0;
}
