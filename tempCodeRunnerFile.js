const express = require('express')
const {popular} = require("./utils/moviedata")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(bodyParser())

app.get('/', function (req, res) {
  console.log("ajiljbnu")
  res.send({data:popular})
})

app.listen(3000)

// [
//     {
//         "adult": false,
//         "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
//         "genre_ids": [
//             28,
//             878,
//             35,
//             10751
//         ],
//         "id": 939243,
//         "original_language": "en",
//         "original_title": "Sonic the Hedgehog 3",
//         "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
//         "popularity": 4014.717,
//         "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
//         "release_date": "2024-12-19",
//         "title": "Sonic the Hedgehog 3",
//         "video": false,
//         "vote_average": 7.774,
//         "vote_count": 1626
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/v9Du2HC3hlknAvGlWhquRbeifwW.jpg",
//         "genre_ids": [
//             28,
//             12,
//             53
//         ],
//         "id": 539972,
//         "original_language": "en",
//         "original_title": "Kraven the Hunter",
//         "overview": "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
//         "popularity": 2300.197,
//         "poster_path": "/nrlfJoxP1EkBVE9pU62L287Jl4D.jpg",
//         "release_date": "2024-12-11",
//         "title": "Kraven the Hunter",
//         "video": false,
//         "vote_average": 6.6,
//         "vote_count": 1116
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/zo8CIjJ2nfNOevqNajwMRO6Hwka.jpg",
//         "genre_ids": [
//             16,
//             12,
//             10751,
//             35
//         ],
//         "id": 1241982,
//         "original_language": "en",
//         "original_title": "Moana 2",
//         "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
//         "popularity": 1851.971,
//         "poster_path": "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
//         "release_date": "2024-11-21",
//         "title": "Moana 2",
//         "video": false,
//         "vote_average": 7.2,
//         "vote_count": 1361
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg",
//         "genre_ids": [
//             28,
//             35
//         ],
//         "id": 993710,
//         "original_language": "en",
//         "original_title": "Back in Action",
//         "overview": "Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blown.",
//         "popularity": 1552.041,
//         "poster_path": "/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
//         "release_date": "2025-01-15",
//         "title": "Back in Action",
//         "video": false,
//         "vote_average": 6.626,
//         "vote_count": 846
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/qSOMdbZ6AOdHR999HWwVAh6ALFI.jpg",
//         "genre_ids": [
//             28,
//             80,
//             53
//         ],
//         "id": 1249289,
//         "original_language": "en",
//         "original_title": "Alarum",
//         "overview": "Two married spies caught in the crosshairs of an international intelligence network will stop at nothing to obtain a critical asset. Joe and Lara are agents living off the grid whose quiet retreat at a winter resort is blown to shreds when members of the old guard suspect the two may have joined an elite team of rogue spies, known as Alarum.",
//         "popularity": 1403.09,
//         "poster_path": "/v313aUGmMNj6yNveaiQXysBmjVS.jpg",
//         "release_date": "2025-01-16",
//         "title": "Alarum",
//         "video": false,
//         "vote_average": 5.814,
//         "vote_count": 137
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/ybSA7fUbYHw8VeRiSJ7tgKJnYWZ.jpg",
//         "genre_ids": [
//             28,
//             53
//         ],
//         "id": 1410082,
//         "original_language": "en",
//         "original_title": "Sniper: The Last Stand",
//         "overview": "To stop an arms dealer from unleashing a deadly superweapon, Ace sniper Brandon Beckett and Agent Zero are deployed to Costa Verde to lead a group of elite soldiers against an unrelenting militia. Taking an untested sniper under his wing, Beckett faces his newest challenge: giving orders instead of receiving them. With both time and ammo running low in a race to save humanity, the team must overcome all odds just to survive.",
//         "popularity": 1272.146,
//         "poster_path": "/TVvIyCsFCmLk9MRLbAZi4X8f32.jpg",
//         "release_date": "2025-01-21",
//         "title": "Sniper: The Last Stand",
//         "video": false,
//         "vote_average": 6.5,
//         "vote_count": 68
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/u7AZ5CdT2af8buRjmYCPXNyJssd.jpg",
//         "genre_ids": [
//             28,
//             35
//         ],
//         "id": 1160956,
//         "original_language": "zh",
//         "original_title": "熊猫计划",
//         "overview": "International action star Jackie Chan is invited to the adoption ceremony of a rare baby panda, but after an international crime syndicate attempts to kidnap the bear, Jackie has to save the bear using his stunt work skills.",
//         "popularity": 1202.264,
//         "poster_path": "/xVS9XiO9upp2SnWx6KpBYb79hLR.jpg",
//         "release_date": "2024-10-01",
//         "title": "Panda Plan",
//         "video": false,
//         "vote_average": 5.818,
//         "vote_count": 33
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/nNF4ZB0UDL4qAUjQfbYZDq3Ck7J.jpg",
//         "genre_ids": [
//             27,
//             53
//         ],
//         "id": 710295,
//         "original_language": "en",
//         "original_title": "Wolf Man",
//         "overview": "With his marriage fraying, Blake persuades his wife Charlotte to take a break from the city and visit his remote childhood home in rural Oregon. As they arrive at the farmhouse in the dead of night, they're attacked by an unseen animal and barricade themselves inside the home as the creature prowls the perimeter. But as the night stretches on, Blake begins to behave strangely, transforming into something unrecognizable.",
//         "popularity": 1086.996,
//         "poster_path": "/jTPBMPTgk9zOUGSkWcoOGbX8cTi.jpg",
//         "release_date": "2025-01-15",
//         "title": "Wolf Man",
//         "video": false,
//         "vote_average": 6.4,
//         "vote_count": 249
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/lWMa1FdgC7zP9ATVg6dgpZ3rxhe.jpg",
//         "genre_ids": [
//             12,
//             10751,
//             16
//         ],
//         "id": 762509,
//         "original_language": "en",
//         "original_title": "Mufasa: The Lion King",
//         "overview": "Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.",
//         "popularity": 1070.855,
//         "poster_path": "/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg",
//         "release_date": "2024-12-18",
//         "title": "Mufasa: The Lion King",
//         "video": false,
//         "vote_average": 7.424,
//         "vote_count": 976
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/h7r6LZ32dgLwtwSW3CxoWIYD9pr.jpg",
//         "genre_ids": [
//             27,
//             14
//         ],
//         "id": 426063,
//         "original_language": "en",
//         "original_title": "Nosferatu",
//         "overview": "A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.",
//         "popularity": 1030.383,
//         "poster_path": "/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg",
//         "release_date": "2024-12-25",
//         "title": "Nosferatu",
//         "video": false,
//         "vote_average": 6.651,
//         "vote_count": 1966
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/vZG7PrX9HmdgL5qfZRjhJsFYEIA.jpg",
//         "genre_ids": [
//             28,
//             878,
//             12
//         ],
//         "id": 912649,
//         "original_language": "en",
//         "original_title": "Venom: The Last Dance",
//         "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
//         "popularity": 1016.916,
//         "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
//         "release_date": "2024-10-22",
//         "title": "Venom: The Last Dance",
//         "video": false,
//         "vote_average": 6.776,
//         "vote_count": 2731
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
//         "genre_ids": [
//             28,
//             12,
//             18
//         ],
//         "id": 558449,
//         "original_language": "en",
//         "original_title": "Gladiator II",
//         "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
//         "popularity": 980.515,
//         "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
//         "release_date": "2024-11-05",
//         "title": "Gladiator II",
//         "video": false,
//         "vote_average": 6.755,
//         "vote_count": 2731
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/hctfNoMpQGfn3VXdBYb9p0P5bT5.jpg",
//         "genre_ids": [
//             18
//         ],
//         "id": 1097549,
//         "original_language": "en",
//         "original_title": "Babygirl",
//         "overview": "A high-powered CEO puts her career and family on the line when she begins a torrid affair with her much younger intern.",
//         "popularity": 936.811,
//         "poster_path": "/A8HbTd0FemZyFCh5qvJFpHGiwF8.jpg",
//         "release_date": "2024-12-25",
//         "title": "Babygirl",
//         "video": false,
//         "vote_average": 5.764,
//         "vote_count": 399
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/1Lk8rgG16Ec0RviE8mcLzLKonql.jpg",
//         "genre_ids": [
//             28,
//             18
//         ],
//         "id": 811941,
//         "original_language": "te",
//         "original_title": "దేవర: Part 1",
//         "overview": "Devara, a fearless man from a coastal region, embarks on a perilous journey into the treacherous world of the sea to safeguard the lives of his people. Unbeknownst to him, his brother Bhaira is plotting a conspiracy against him. As events unfold, Devara passes on his legacy to his mild-mannered and timid son, Varada.",
//         "popularity": 855.959,
//         "poster_path": "/A9ENz6d4lC3UYOX8Z1gJwDEo1sM.jpg",
//         "release_date": "2024-09-26",
//         "title": "Devara: Part 1",
//         "video": false,
//         "vote_average": 7.2,
//         "vote_count": 114
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/9oYdz5gDoIl8h67e3ccv3OHtmm2.jpg",
//         "genre_ids": [
//             27,
//             878,
//             35
//         ],
//         "id": 933260,
//         "original_language": "en",
//         "original_title": "The Substance",
//         "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
//         "popularity": 835.417,
//         "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
//         "release_date": "2024-09-07",
//         "title": "The Substance",
//         "video": false,
//         "vote_average": 7.138,
//         "vote_count": 3731
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/3SOunz2Z0qcOVlrkYFj20HquziB.jpg",
//         "genre_ids": [
//             878,
//             12,
//             28,
//             18,
//             10770
//         ],
//         "id": 1114894,
//         "original_language": "en",
//         "original_title": "Star Trek: Section 31",
//         "overview": "Emperor Philippa Georgiou joins a secret division of Starfleet tasked with protecting the United Federation of Planets and faces the sins of her past.",
//         "popularity": 817.687,
//         "poster_path": "/sqiCinCzUGlzQiFytS30N1nO3Pt.jpg",
//         "release_date": "2025-01-15",
//         "title": "Star Trek: Section 31",
//         "video": false,
//         "vote_average": 4.58,
//         "vote_count": 131
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/cA88pwGnHa64BBcU3R1oCcJH9Qc.jpg",
//         "genre_ids": [
//             28,
//             27,
//             53
//         ],
//         "id": 970450,
//         "original_language": "en",
//         "original_title": "Werewolves",
//         "overview": "A year after a supermoon’s light activated a dormant gene, transforming humans into bloodthirsty werewolves and causing nearly a billion deaths, the nightmare resurfaces as the supermoon rises again. Two scientists attempt to stop the mutation but fail and must now struggle to reach one of their family homes.",
//         "popularity": 743.068,
//         "poster_path": "/cRTctVlwvMdXVsaYbX5qfkittDP.jpg",
//         "release_date": "2024-12-04",
//         "title": "Werewolves",
//         "video": false,
//         "vote_average": 6.208,
//         "vote_count": 276
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/pqulyfkug9A7TmmRn5zrbRA8TAY.jpg",
//         "genre_ids": [
//             28,
//             35
//         ],
//         "id": 1255788,
//         "original_language": "fr",
//         "original_title": "Le Jardinier",
//         "overview": "Every year the Prime Minister has a list of all kinds of troublemakers eliminated in the name of the famous Reason of State. Serge Shuster, Special Adviser to the President of the Republic, finds himself on this list, better known as the Matignon List.  Condemned to certain death and at the heart of an implacable plot and a state secret that also put his family in danger, Serge, his wife and children have only one hope left - their gardener, Léo, who hates it when « slugs » invade his garden... Especially those that want to kill innocent families.",
//         "popularity": 718.373,
//         "poster_path": "/5T9WR7vIOnHm6xhVt5zBuPbBgt1.jpg",
//         "release_date": "2025-01-30",
//         "title": "The Gardener",
//         "video": false,
//         "vote_average": 6.3,
//         "vote_count": 56
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/bVUB4WI2vTq46OHu2o1n9HdoloQ.jpg",
//         "genre_ids": [
//             18
//         ],
//         "id": 1300607,
//         "original_language": "es",
//         "original_title": "Los dos hemisferios de Lucca",
//         "overview": "Determined to help her son, who has cerebral palsy, Bárbara takes her family to India for an experimental treatment.",
//         "popularity": 714.818,
//         "poster_path": "/fX3Q5hxUAUs1k8JQkNTwFpBd6BC.jpg",
//         "release_date": "2025-01-30",
//         "title": "Lucca's World",
//         "video": false,
//         "vote_average": 7.858,
//         "vote_count": 53
//     },
//     {
//         "adult": false,
//         "backdrop_path": "/au3o84ub27qTZiMiEc9UYzN74V3.jpg",
//         "genre_ids": [
//             28,
//             878,
//             53
//         ],
//         "id": 1035048,
//         "original_language": "en",
//         "original_title": "Elevation",
//         "overview": "A single father and two women venture from the safety of their homes to face monstrous creatures to save the life of a young boy.",
//         "popularity": 706.436,
//         "poster_path": "/tnfc0NJ3BzhJrGJhkkEd6MHBdq5.jpg",
//         "release_date": "2024-11-07",
//         "title": "Elevation",
//         "video": false,
//         "vote_average": 6.368,
//         "vote_count": 481
//     }
// ]