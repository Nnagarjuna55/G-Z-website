/**
 * Stock photography from the Unsplash CDN.
 * Every ID below was verified to return HTTP 200 before being added —
 * do not add an entry without checking the URL loads first.
 */

const BASE = "https://images.unsplash.com/photo-";

function img(id: string) {
  return `${BASE}${id}?q=80&auto=format&fit=crop`;
}

export const PHOTOS = {
  // Campus & classrooms
  graduation: img("1541339907198-e08756dedf3f"),
  classroom: img("1509062522246-3755977927d7"),
  classroomStudents: img("1577896851231-70ef18881754"),
  lecture: img("1524178232363-1fb2b075b655"),

  // Students & learners
  studentsLaptops: img("1522202176988-66273c2fd55f"),
  studentsGroup: img("1531545514256-b1400bc00f31"),
  takingNotes: img("1434030216411-0b793f4b4173"),
  studying: img("1503676260728-1c00da094a0b"),
  studentClassroom: img("1541178735493-479c1a27ed24"),

  // Teams & offices
  teamOffice: img("1522071820081-009f0129c71c"),
  officeMeeting: img("1556761175-5973dc0f32e7"),
  teamTable: img("1523240795612-9a054b0db644"),
  teamWorking: img("1531482615713-2afd69097998"),
  teamPlanning: img("1542744173-8e7e53415bb0"),
  teamDesk: img("1519389950473-47ba0277781c"),

  // Corporate & hiring
  businessMeeting: img("1454165804606-c3d57bc86b40"),
  meeting: img("1552664730-d307ca884978"),
  handshake: img("1600880292203-757bb62b4baf"),
  teamMeeting: img("1521737711867-e3b97375f902"),

  // Technology
  code: img("1461749280684-dccba630e2f6"),
  devTeam: img("1551434678-e076c223a692"),
  dataScreen: img("1516321318423-f06f85e504b3"),
  analytics: img("1551288049-bebda4e38f71"),
} as const;

/**
 * Demo people shown inside product mockups. Each face is always shown with
 * the same name so no one appears under two different names on the site.
 * Each ID was verified (HTTP 200) and visually checked as a portrait.
 */
export const PEOPLE = {
  ananya: { name: "Ananya", photo: img("1438761681033-6461ffad8d80") },
  rahul: { name: "Rahul", photo: img("1500648767791-00dcc994a43e") },
  sneha: { name: "Sneha", photo: img("1544005313-94ddf0286df2") },
  vikram: { name: "Vikram", photo: img("1531427186611-ecfd6d936c79") },
  arjun: { name: "Arjun", photo: img("1492562080023-ab3db95bfbce") },
  karan: { name: "Karan", photo: img("1539571696357-5a69c17a67c6") },
  priya: { name: "Priya", photo: img("1580489944761-15a19d654956") },
  neha: { name: "Neha", photo: img("1487412720507-e7ab37603c6f") },
} as const;
