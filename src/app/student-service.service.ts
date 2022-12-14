import { Injectable } from '@angular/core';
import { Student } from './shared/interface/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  studentData: Student[] =[{
    "id": 1,
    "first_name": "Griff",
    "last_name": "Bradd",
    "email": "gbradd0@yellowbook.com",
    "gender": "Male",
    "username": "gbradd0",
    "contact": "994-133-3896"
  }, {
    "id": 2,
    "first_name": "Antony",
    "last_name": "Tremathack",
    "email": "atremathack1@hugedomains.com",
    "gender": "Male",
    "username": "atremathack1",
    "contact": "253-646-9373"
  }, {
    "id": 3,
    "first_name": "Geoffry",
    "last_name": "Pretti",
    "email": "gpretti2@tiny.cc",
    "gender": "Male",
    "username": "gpretti2",
    "contact": "577-711-5321"
  }, {
    "id": 4,
    "first_name": "Bari",
    "last_name": "Yong",
    "email": "byong3@twitter.com",
    "gender": "Female",
    "username": "byong3",
    "contact": "951-157-1379"
  }, {
    "id": 5,
    "first_name": "Rhys",
    "last_name": "Howling",
    "email": "rhowling4@amazon.co.uk",
    "gender": "Male",
    "username": "rhowling4",
    "contact": "130-813-8195"
  }, {
    "id": 6,
    "first_name": "Ruddie",
    "last_name": "Paolicchi",
    "email": "rpaolicchi5@phoca.cz",
    "gender": "Male",
    "username": "rpaolicchi5",
    "contact": "427-390-5528"
  }, {
    "id": 7,
    "first_name": "Reeta",
    "last_name": "Anthoin",
    "email": "ranthoin6@cornell.edu",
    "gender": "Female",
    "username": "ranthoin6",
    "contact": "949-347-4123"
  }, {
    "id": 8,
    "first_name": "Vaughn",
    "last_name": "Dauby",
    "email": "vdauby7@senate.gov",
    "gender": "Male",
    "username": "vdauby7",
    "contact": "475-565-5288"
  }, {
    "id": 9,
    "first_name": "Gay",
    "last_name": "Dabourne",
    "email": "gdabourne8@biglobe.ne.jp",
    "gender": "Genderfluid",
    "username": "gdabourne8",
    "contact": "983-485-4647"
  }, {
    "id": 10,
    "first_name": "Pepita",
    "last_name": "Jasik",
    "email": "pjasik9@diigo.com",
    "gender": "Female",
    "username": "pjasik9",
    "contact": "210-257-8130"
  }, {
    "id": 11,
    "first_name": "Irene",
    "last_name": "Bierling",
    "email": "ibierlinga@pcworld.com",
    "gender": "Female",
    "username": "ibierlinga",
    "contact": "840-503-4764"
  }, {
    "id": 12,
    "first_name": "Parker",
    "last_name": "Yeldon",
    "email": "pyeldonb@a8.net",
    "gender": "Male",
    "username": "pyeldonb",
    "contact": "925-616-4496"
  }, {
    "id": 13,
    "first_name": "Vanessa",
    "last_name": "Deetlefs",
    "email": "vdeetlefsc@sfgate.com",
    "gender": "Female",
    "username": "vdeetlefsc",
    "contact": "243-426-9189"
  }, {
    "id": 14,
    "first_name": "Trudey",
    "last_name": "Durno",
    "email": "tdurnod@livejournal.com",
    "gender": "Female",
    "username": "tdurnod",
    "contact": "313-178-3369"
  }, {
    "id": 15,
    "first_name": "Gradeigh",
    "last_name": "Needs",
    "email": "gneedse@icio.us",
    "gender": "Male",
    "username": "gneedse",
    "contact": "354-649-2463"
  }, {
    "id": 16,
    "first_name": "Reeba",
    "last_name": "Lampaert",
    "email": "rlampaertf@msn.com",
    "gender": "Female",
    "username": "rlampaertf",
    "contact": "619-819-8747"
  }, {
    "id": 17,
    "first_name": "Merlina",
    "last_name": "Gartland",
    "email": "mgartlandg@google.cn",
    "gender": "Polygender",
    "username": "mgartlandg",
    "contact": "778-713-2635"
  }, {
    "id": 18,
    "first_name": "Rowena",
    "last_name": "Argo",
    "email": "rargoh@myspace.com",
    "gender": "Female",
    "username": "rargoh",
    "contact": "400-316-7357"
  }, {
    "id": 19,
    "first_name": "Yolande",
    "last_name": "Courage",
    "email": "ycouragei@eepurl.com",
    "gender": "Female",
    "username": "ycouragei",
    "contact": "553-731-3792"
  }, {
    "id": 20,
    "first_name": "Cammi",
    "last_name": "Crinkley",
    "email": "ccrinkleyj@pagesperso-orange.fr",
    "gender": "Female",
    "username": "ccrinkleyj",
    "contact": "439-287-3611"
  }, {
    "id": 21,
    "first_name": "Tomasine",
    "last_name": "Crose",
    "email": "tcrosek@hubpages.com",
    "gender": "Female",
    "username": "tcrosek",
    "contact": "841-528-8289"
  }, {
    "id": 22,
    "first_name": "Olwen",
    "last_name": "Becom",
    "email": "obecoml@bigcartel.com",
    "gender": "Female",
    "username": "obecoml",
    "contact": "975-800-8609"
  }, {
    "id": 23,
    "first_name": "Dasya",
    "last_name": "Leveridge",
    "email": "dleveridgem@yolasite.com",
    "gender": "Female",
    "username": "dleveridgem",
    "contact": "316-216-4313"
  }, {
    "id": 24,
    "first_name": "Mabel",
    "last_name": "Wallach",
    "email": "mwallachn@biblegateway.com",
    "gender": "Female",
    "username": "mwallachn",
    "contact": "658-381-2139"
  }, {
    "id": 25,
    "first_name": "Lucius",
    "last_name": "Whenham",
    "email": "lwhenhamo@hexun.com",
    "gender": "Male",
    "username": "lwhenhamo",
    "contact": "683-982-9436"
  }, {
    "id": 26,
    "first_name": "Van",
    "last_name": "Gallichiccio",
    "email": "vgallichicciop@oakley.com",
    "gender": "Male",
    "username": "vgallichicciop",
    "contact": "734-717-2932"
  }, {
    "id": 27,
    "first_name": "Elsbeth",
    "last_name": "Sapena",
    "email": "esapenaq@cornell.edu",
    "gender": "Female",
    "username": "esapenaq",
    "contact": "738-362-4639"
  }, {
    "id": 28,
    "first_name": "Lacie",
    "last_name": "Banthorpe",
    "email": "lbanthorper@blog.com",
    "gender": "Female",
    "username": "lbanthorper",
    "contact": "133-944-2025"
  }, {
    "id": 29,
    "first_name": "Theresa",
    "last_name": "Whittlesee",
    "email": "twhittlesees@wikimedia.org",
    "gender": "Female",
    "username": "twhittlesees",
    "contact": "912-617-7917"
  }, {
    "id": 30,
    "first_name": "Libbie",
    "last_name": "Dehm",
    "email": "ldehmt@shop-pro.jp",
    "gender": "Female",
    "username": "ldehmt",
    "contact": "262-805-7256"
  }, {
    "id": 31,
    "first_name": "Eb",
    "last_name": "Autin",
    "email": "eautinu@google.co.jp",
    "gender": "Male",
    "username": "eautinu",
    "contact": "937-769-6616"
  }, {
    "id": 32,
    "first_name": "Teresina",
    "last_name": "Curnucke",
    "email": "tcurnuckev@istockphoto.com",
    "gender": "Female",
    "username": "tcurnuckev",
    "contact": "213-809-6626"
  }, {
    "id": 33,
    "first_name": "Hugues",
    "last_name": "Hanwell",
    "email": "hhanwellw@twitter.com",
    "gender": "Male",
    "username": "hhanwellw",
    "contact": "666-575-8086"
  }, {
    "id": 34,
    "first_name": "Natalina",
    "last_name": "Reeme",
    "email": "nreemex@bandcamp.com",
    "gender": "Female",
    "username": "nreemex",
    "contact": "291-286-3296"
  }, {
    "id": 35,
    "first_name": "Letta",
    "last_name": "Traynor",
    "email": "ltraynory@unblog.fr",
    "gender": "Female",
    "username": "ltraynory",
    "contact": "721-660-3507"
  }, {
    "id": 36,
    "first_name": "Faun",
    "last_name": "Fulton",
    "email": "ffultonz@hc360.com",
    "gender": "Female",
    "username": "ffultonz",
    "contact": "649-427-0171"
  }, {
    "id": 37,
    "first_name": "Amelie",
    "last_name": "Massingham",
    "email": "amassingham10@microsoft.com",
    "gender": "Agender",
    "username": "amassingham10",
    "contact": "292-514-2271"
  }, {
    "id": 38,
    "first_name": "Helaina",
    "last_name": "Staker",
    "email": "hstaker11@webmd.com",
    "gender": "Female",
    "username": "hstaker11",
    "contact": "301-950-4699"
  }, {
    "id": 39,
    "first_name": "Neall",
    "last_name": "McCleary",
    "email": "nmccleary12@tinyurl.com",
    "gender": "Polygender",
    "username": "nmccleary12",
    "contact": "215-790-0940"
  }, {
    "id": 40,
    "first_name": "Brander",
    "last_name": "Calrow",
    "email": "bcalrow13@comsenz.com",
    "gender": "Male",
    "username": "bcalrow13",
    "contact": "124-102-1136"
  }, {
    "id": 41,
    "first_name": "Garrot",
    "last_name": "Kobierra",
    "email": "gkobierra14@telegraph.co.uk",
    "gender": "Male",
    "username": "gkobierra14",
    "contact": "319-779-0590"
  }, {
    "id": 42,
    "first_name": "Bertie",
    "last_name": "Humbey",
    "email": "bhumbey15@google.com.au",
    "gender": "Agender",
    "username": "bhumbey15",
    "contact": "838-103-8085"
  }, {
    "id": 43,
    "first_name": "Amberly",
    "last_name": "Maun",
    "email": "amaun16@java.com",
    "gender": "Female",
    "username": "amaun16",
    "contact": "622-728-5661"
  }, {
    "id": 44,
    "first_name": "Lauri",
    "last_name": "Mellmoth",
    "email": "lmellmoth17@trellian.com",
    "gender": "Female",
    "username": "lmellmoth17",
    "contact": "255-165-0674"
  }, {
    "id": 45,
    "first_name": "Nady",
    "last_name": "Layburn",
    "email": "nlayburn18@exblog.jp",
    "gender": "Female",
    "username": "nlayburn18",
    "contact": "217-103-3167"
  }, {
    "id": 46,
    "first_name": "Lenette",
    "last_name": "Hudson",
    "email": "lhudson19@bravesites.com",
    "gender": "Female",
    "username": "lhudson19",
    "contact": "970-568-8227"
  }, {
    "id": 47,
    "first_name": "Janos",
    "last_name": "Coultard",
    "email": "jcoultard1a@marriott.com",
    "gender": "Male",
    "username": "jcoultard1a",
    "contact": "184-385-6084"
  }, {
    "id": 48,
    "first_name": "Pepita",
    "last_name": "Kuhlen",
    "email": "pkuhlen1b@cam.ac.uk",
    "gender": "Female",
    "username": "pkuhlen1b",
    "contact": "697-437-5553"
  }, {
    "id": 49,
    "first_name": "Karine",
    "last_name": "Buckett",
    "email": "kbuckett1c@youtu.be",
    "gender": "Non-binary",
    "username": "kbuckett1c",
    "contact": "563-613-3186"
  }, {
    "id": 50,
    "first_name": "Michelina",
    "last_name": "Lawrinson",
    "email": "mlawrinson1d@marketwatch.com",
    "gender": "Female",
    "username": "mlawrinson1d",
    "contact": "156-505-3797"
  }, {
    "id": 51,
    "first_name": "Ruben",
    "last_name": "Weth",
    "email": "rweth1e@edublogs.org",
    "gender": "Male",
    "username": "rweth1e",
    "contact": "151-938-7956"
  }, {
    "id": 52,
    "first_name": "Garreth",
    "last_name": "Tubb",
    "email": "gtubb1f@webnode.com",
    "gender": "Male",
    "username": "gtubb1f",
    "contact": "405-594-9234"
  }, {
    "id": 53,
    "first_name": "Grier",
    "last_name": "Karchewski",
    "email": "gkarchewski1g@artisteer.com",
    "gender": "Female",
    "username": "gkarchewski1g",
    "contact": "916-672-2903"
  }, {
    "id": 54,
    "first_name": "Salvidor",
    "last_name": "Fulker",
    "email": "sfulker1h@cnn.com",
    "gender": "Male",
    "username": "sfulker1h",
    "contact": "509-486-5426"
  }, {
    "id": 55,
    "first_name": "Elyssa",
    "last_name": "Delahunty",
    "email": "edelahunty1i@xinhuanet.com",
    "gender": "Female",
    "username": "edelahunty1i",
    "contact": "248-911-3199"
  }, {
    "id": 56,
    "first_name": "Frieda",
    "last_name": "Trayes",
    "email": "ftrayes1j@dedecms.com",
    "gender": "Female",
    "username": "ftrayes1j",
    "contact": "929-821-0709"
  }, {
    "id": 57,
    "first_name": "Broderick",
    "last_name": "Padillo",
    "email": "bpadillo1k@mac.com",
    "gender": "Male",
    "username": "bpadillo1k",
    "contact": "236-346-6292"
  }, {
    "id": 58,
    "first_name": "Elton",
    "last_name": "Vayne",
    "email": "evayne1l@miitbeian.gov.cn",
    "gender": "Male",
    "username": "evayne1l",
    "contact": "457-502-3452"
  }, {
    "id": 59,
    "first_name": "Aurilia",
    "last_name": "Fodden",
    "email": "afodden1m@amazonaws.com",
    "gender": "Female",
    "username": "afodden1m",
    "contact": "673-595-3718"
  }, {
    "id": 60,
    "first_name": "Padget",
    "last_name": "Edis",
    "email": "pedis1n@businesswire.com",
    "gender": "Male",
    "username": "pedis1n",
    "contact": "437-645-3517"
  }, {
    "id": 61,
    "first_name": "Dasha",
    "last_name": "Pateman",
    "email": "dpateman1o@npr.org",
    "gender": "Female",
    "username": "dpateman1o",
    "contact": "884-928-2634"
  }, {
    "id": 62,
    "first_name": "Zola",
    "last_name": "Apple",
    "email": "zapple1p@paginegialle.it",
    "gender": "Female",
    "username": "zapple1p",
    "contact": "528-282-6519"
  }, {
    "id": 63,
    "first_name": "Gerrilee",
    "last_name": "Blackboro",
    "email": "gblackboro1q@icio.us",
    "gender": "Female",
    "username": "gblackboro1q",
    "contact": "406-543-5858"
  }, {
    "id": 64,
    "first_name": "Virgie",
    "last_name": "Hartless",
    "email": "vhartless1r@printfriendly.com",
    "gender": "Male",
    "username": "vhartless1r",
    "contact": "847-596-7189"
  }, {
    "id": 65,
    "first_name": "Stuart",
    "last_name": "Haker",
    "email": "shaker1s@ftc.gov",
    "gender": "Male",
    "username": "shaker1s",
    "contact": "413-337-6326"
  }, {
    "id": 66,
    "first_name": "Willard",
    "last_name": "Hayen",
    "email": "whayen1t@cloudflare.com",
    "gender": "Male",
    "username": "whayen1t",
    "contact": "514-174-9893"
  }, {
    "id": 67,
    "first_name": "Neale",
    "last_name": "Thurske",
    "email": "nthurske1u@cnbc.com",
    "gender": "Male",
    "username": "nthurske1u",
    "contact": "686-100-4977"
  }, {
    "id": 68,
    "first_name": "Gleda",
    "last_name": "Macer",
    "email": "gmacer1v@php.net",
    "gender": "Female",
    "username": "gmacer1v",
    "contact": "921-877-1954"
  }, {
    "id": 69,
    "first_name": "Mord",
    "last_name": "Stains",
    "email": "mstains1w@google.cn",
    "gender": "Male",
    "username": "mstains1w",
    "contact": "886-366-9680"
  }, {
    "id": 70,
    "first_name": "Jaclin",
    "last_name": "Gibling",
    "email": "jgibling1x@twitpic.com",
    "gender": "Female",
    "username": "jgibling1x",
    "contact": "398-175-7920"
  }, {
    "id": 71,
    "first_name": "Evelyn",
    "last_name": "Ties",
    "email": "eties1y@dmoz.org",
    "gender": "Male",
    "username": "eties1y",
    "contact": "565-134-2685"
  }, {
    "id": 72,
    "first_name": "Gan",
    "last_name": "Turnpenny",
    "email": "gturnpenny1z@cbc.ca",
    "gender": "Male",
    "username": "gturnpenny1z",
    "contact": "631-894-4001"
  }, {
    "id": 73,
    "first_name": "Lyn",
    "last_name": "Edwicke",
    "email": "ledwicke20@nih.gov",
    "gender": "Male",
    "username": "ledwicke20",
    "contact": "779-352-4320"
  }, {
    "id": 74,
    "first_name": "Renae",
    "last_name": "Brettelle",
    "email": "rbrettelle21@nydailynews.com",
    "gender": "Female",
    "username": "rbrettelle21",
    "contact": "175-567-1304"
  }, {
    "id": 75,
    "first_name": "Andie",
    "last_name": "Antonomolii",
    "email": "aantonomolii22@google.ca",
    "gender": "Female",
    "username": "aantonomolii22",
    "contact": "384-272-2932"
  }, {
    "id": 76,
    "first_name": "Fergus",
    "last_name": "Anderer",
    "email": "fanderer23@ucoz.com",
    "gender": "Male",
    "username": "fanderer23",
    "contact": "279-421-5823"
  }, {
    "id": 77,
    "first_name": "Honor",
    "last_name": "Chinnery",
    "email": "hchinnery24@youtube.com",
    "gender": "Female",
    "username": "hchinnery24",
    "contact": "859-830-4952"
  }, {
    "id": 78,
    "first_name": "Ashia",
    "last_name": "Makinson",
    "email": "amakinson25@sphinn.com",
    "gender": "Female",
    "username": "amakinson25",
    "contact": "632-281-5262"
  }, {
    "id": 79,
    "first_name": "Maison",
    "last_name": "Henstone",
    "email": "mhenstone26@yelp.com",
    "gender": "Male",
    "username": "mhenstone26",
    "contact": "180-288-6223"
  }, {
    "id": 80,
    "first_name": "Dalt",
    "last_name": "Farnill",
    "email": "dfarnill27@zdnet.com",
    "gender": "Male",
    "username": "dfarnill27",
    "contact": "695-638-6374"
  }, {
    "id": 81,
    "first_name": "Giuseppe",
    "last_name": "Buglar",
    "email": "gbuglar28@deliciousdays.com",
    "gender": "Genderqueer",
    "username": "gbuglar28",
    "contact": "542-912-4229"
  }, {
    "id": 82,
    "first_name": "Danny",
    "last_name": "Fellon",
    "email": "dfellon29@bloglines.com",
    "gender": "Male",
    "username": "dfellon29",
    "contact": "338-956-2740"
  }, {
    "id": 83,
    "first_name": "Ber",
    "last_name": "Ellett",
    "email": "bellett2a@reference.com",
    "gender": "Male",
    "username": "bellett2a",
    "contact": "558-233-6012"
  }, {
    "id": 84,
    "first_name": "Ortensia",
    "last_name": "Kerby",
    "email": "okerby2b@hc360.com",
    "gender": "Female",
    "username": "okerby2b",
    "contact": "879-133-3073"
  }, {
    "id": 85,
    "first_name": "Barnabe",
    "last_name": "Maric",
    "email": "bmaric2c@bloglovin.com",
    "gender": "Male",
    "username": "bmaric2c",
    "contact": "333-877-5666"
  }, {
    "id": 86,
    "first_name": "Gustav",
    "last_name": "Losebie",
    "email": "glosebie2d@constantcontact.com",
    "gender": "Male",
    "username": "glosebie2d",
    "contact": "624-772-0646"
  }, {
    "id": 87,
    "first_name": "Marwin",
    "last_name": "Dawidowicz",
    "email": "mdawidowicz2e@mapquest.com",
    "gender": "Male",
    "username": "mdawidowicz2e",
    "contact": "928-890-9210"
  }, {
    "id": 88,
    "first_name": "Gilberto",
    "last_name": "Doveston",
    "email": "gdoveston2f@chron.com",
    "gender": "Male",
    "username": "gdoveston2f",
    "contact": "550-769-8114"
  }, {
    "id": 89,
    "first_name": "Lexine",
    "last_name": "Yokel",
    "email": "lyokel2g@jalbum.net",
    "gender": "Female",
    "username": "lyokel2g",
    "contact": "598-604-3206"
  }, {
    "id": 90,
    "first_name": "Warren",
    "last_name": "Wroughton",
    "email": "wwroughton2h@forbes.com",
    "gender": "Male",
    "username": "wwroughton2h",
    "contact": "567-429-7655"
  }, {
    "id": 91,
    "first_name": "Felecia",
    "last_name": "Giacomini",
    "email": "fgiacomini2i@salon.com",
    "gender": "Female",
    "username": "fgiacomini2i",
    "contact": "666-220-3838"
  }, {
    "id": 92,
    "first_name": "Celie",
    "last_name": "Fulk",
    "email": "cfulk2j@theatlantic.com",
    "gender": "Female",
    "username": "cfulk2j",
    "contact": "198-728-4968"
  }, {
    "id": 93,
    "first_name": "Veda",
    "last_name": "Birks",
    "email": "vbirks2k@toplist.cz",
    "gender": "Agender",
    "username": "vbirks2k",
    "contact": "818-237-1431"
  }, {
    "id": 94,
    "first_name": "Kaitlynn",
    "last_name": "Whapham",
    "email": "kwhapham2l@java.com",
    "gender": "Female",
    "username": "kwhapham2l",
    "contact": "760-446-2046"
  }, {
    "id": 95,
    "first_name": "Annalise",
    "last_name": "Vell",
    "email": "avell2m@4shared.com",
    "gender": "Female",
    "username": "avell2m",
    "contact": "244-280-2705"
  }, {
    "id": 96,
    "first_name": "Arlie",
    "last_name": "Abrahamoff",
    "email": "aabrahamoff2n@columbia.edu",
    "gender": "Female",
    "username": "aabrahamoff2n",
    "contact": "712-558-8110"
  }, {
    "id": 97,
    "first_name": "Jackelyn",
    "last_name": "Viveash",
    "email": "jviveash2o@wordpress.com",
    "gender": "Female",
    "username": "jviveash2o",
    "contact": "398-474-3538"
  }, {
    "id": 98,
    "first_name": "Sol",
    "last_name": "Dobell",
    "email": "sdobell2p@intel.com",
    "gender": "Male",
    "username": "sdobell2p",
    "contact": "310-861-9515"
  }, {
    "id": 99,
    "first_name": "Nicolais",
    "last_name": "Jills",
    "email": "njills2q@linkedin.com",
    "gender": "Male",
    "username": "njills2q",
    "contact": "893-733-3335"
  }, {
    "id": 100,
    "first_name": "Stillmann",
    "last_name": "Nend",
    "email": "snend2r@amazon.com",
    "gender": "Male",
    "username": "snend2r",
    "contact": "734-891-1792"
  }]
  constructor() { }
  fetchStudent():Student[]{
    console.log("Data student fetch mai se aa rhi h")
    return this.studentData;
  }
}
