const grammyData = [
  {
    edition: "2nd Annual GRAMMY Awards",
    categories: [
      {
        category: "Album of the Year",
        nominees: [
          { artist: "Riley", song: "Dandelions" },
          { artist: "Eric", song: "Overgrown" },
          { artist: "Trevor", song: "Poets Can't Be Murdered" },
          { artist: "4Music", song: "Salute" },
          { artist: "Hannah", song: "THE COUNTRY CLUB" },
          { artist: "Ava", song: "The Drive" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Record of the Year",
        nominees: [
          { artist: "Ava", song: "Bloodsucker" },
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "4Music & Miles Carson", song: "I Got The Power" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Riley", song: "Remains For Us" },
          { artist: "Hannah", song: "TEXAS ON FIRE" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Song of the Year",
        nominees: [
          { artist: "Alana Grace", song: "AFTERMATH" },
          { artist: "Ava", song: "Bloodsucker" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Trevor", song: "Over Those Hills" },
          { artist: "Riley", song: "Remains For Us" },
          { artist: "Hannah", song: "TEXAS ON FIRE" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best New Artist",
        nominees: [
          { artist: "4Music", song: "4Music" },
          { artist: "Alana Grace", song: "Alana Grace"},
          { artist: "Blair", song: "Blair" },
          { artist: "Eric", song: "Eric"},
          { artist: "Riley", song: "Riley" },
          { artist: "Zuri", song: "Zuri" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Producer of the Year, Non-Classical",
        nominees: [
          { artist: "Aria", song: "Aria"},
          { artist: "Eric", song: "Eric" },
          { artist: "Even Grace", song: "Even Grace" },
          { artist: "Hannah", song: "Hannah" },
          { artist: "Trevor", song: "Trevor" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Songwriter of the Year, Non-Classical",
        nominees: [
          { artist: "Ava", song: "Ava" },
          { artist: "Eric", song: "Eric" },
          { artist: "Hannah", song: "Hannah" },
          { artist: "Riley", song: "Riley" },
          { artist: "Trevor", song: "Trevor" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Pop Vocal Album",
        nominees: [
          { artist: "Riley", song: "Dandelions" },
          { artist: "Aria", song: "Dreamscape (Deluxe)" },
          { artist: "4Music", song: "Salute" },
          { artist: "Hannah", song: "THE COUNTRY CLUB" },
          { artist: "Ava", song: "The Drive" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Pop Solo Performance",
        nominees: [
          { artist: "Ava", song: "Bloodsucker" },
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Riley", song: "Let It Go" },
          { artist: "Hannah", song: "SHOTGUN" },
          { artist: "Owen Graham", song: "Stolen" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Pop Duo/Group Performance",
        nominees: [
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "4Music", song: "Salute" },
          { artist: "Hannah & Megan", song: "THE DAY I DIE" },
          { artist: "Trevor & Hannah", song: "Verlaten" },
          { artist: "Zuri & Riley", song: "Young Night" }
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Dance Pop Recording",
        nominees: [
          { artist: "Aria & Miles Carson", song: "Body Language" },
          { artist: "Riley", song: "Hearthous" },
          { artist: "4Music & Miles Carson", song: "I Got The Power" },
          { artist: "Zuri & Riley", song: "Young Night" }
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Rock/Alternative Performance",
        nominees: [
          { artist: "Alana Grace", song: "AFTERMATH" },
          { artist: "Ava", song: "DRUNK!" },
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Owen Graham", song: "Stolen" }
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Rock/Alternative Song",
        nominees: [
          { artist: "Alana Grace", song: "AFTERMATH" },
          { artist: "Ava", song: "Oh, Was That Yours?" },
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Owen Graham", song: "Stolen" }
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Rap/R&B Album",
        nominees: [
          { artist: "Aria", song: "Dreamscape (Deluxe)" },
          { artist: "Eric", song: "Overgrown" },
          { artist: "Trevor", song: "Poets Can't Be Murdered" },
          { artist: "Hannah", song: "THE COUNTRY CLUB" }
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Rap/R&B Performance",
        nominees: [
          { artist: "Aria & Miles Carson", song: "By My Side" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Trevor", song: "Over Those Hills" },
          { artist: "Hannah", song: "TEXAS ON FIRE" }
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Rap/R&B Song",
        nominees: [
          { artist: "Aria", song: "Permanent" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Trevor", song: "Over Those Hills" },
          { artist: "Hannah", song: "TEXAS ON FIRE" }
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Music Video",
        nominees: [
          { artist: "Ava", song: "Bloodsucker" },
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Eric & Liz", song: "Late Night Talking" },
          { artist: "Trevor", song: "Over Those Hills" },
          { artist: "Riley", song: "Remains For Us" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Enginereed Album, Non-Classical",
        nominees: [
          { artist: "Riley", song: "Dandelions" },
          { artist: "Alana Grace", song: "MELANCHOLIA" },
          { artist: "Eric", song: "Overgrown" },
          { artist: "Hannah", song: "THE COUNTRY CLUB" },
          { artist: "Ava", song: "The Drive" }
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Boxed Or Special Limited Edition Package",
        nominees: [
          { artist: "Riley", song: "Dandelions" },
          { artist: "Aria", song: "Dreamscape (Deluxe)" },
          { artist: "Alana Grace", song: "MELANCHOLIA" },
          { artist: "Hannah", song: "THE COUNTRY CLUB" },
          { artist: "Ava", song: "The Drive" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Recording Package",
        nominees: [
          { artist: "Riley", song: "Dandelions" },
          { artist: "Eric", song: "Overgrown" },
          { artist: "Alana Grace", song: "MELANCHOLIA" },
          { artist: "Hannah", song: "THE COUNTRY CLUB" },
          { artist: "Ava", song: "The Drive" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Album Art",
        nominees: [
          { artist: "Riely", song: "Dandelions" },
          { artist: "Aria", song: "Dreamscape (Deluxe)" },
          { artist: "Trevor", song: "Poets Can't Be Murdered" },
          { artist: "Hannah", song: "THE COUNTRY CLUB" },
          { artist: "Ava", song: "The Drive" },
        ],
        winner: { artist: "-", song: "-" }
      },
      {
        category: "Best Single Art",
        nominees: [
          { artist: "Nate", song: "HIGHWAY BOYS" },
          { artist: "Eric, Liz", song: "Late Night Talking" },
          { artist: "Riley", song: "Let It Go" },
          { artist: "Ava", song: "Oh, Was That Yours?" },
          { artist: "Hannah", song: "SHOTGUN" },
        ],
        winner: { artist: "-", song: "-" }
      }
    ]
  },
  {
    edition: "1st Annual GRAMMY Awards",
    categories: [
      {
        category: "Album of the Year",
        nominees: [
          { artist: "Ava", song: "House Of The Rising Sun" },
          { artist: "Aria", song: "Dreamscape" },
          { artist: "Even Grace", song: "What Ever Happened?" },
          { artist: "Liz", song: "everlasting" },
          { artist: "Conan Woolridge", song: "Forbidden Whispers" },
          { artist: "Anthony", song: "meaningless" },
          { artist: "Trevor", song: "KIDS SEE GHOSTS" },
        ],
        winner: { artist: "Liz", song: "everlasting" }
      },
      {
        category: "Record of the Year",
        nominees: [
          { artist: "Ava", song: "Soul For My Love" },
          { artist: "Aria & Hannah", song: "Boom Boom" },
          { artist: "Fiona", song: "My Game" },
          { artist: "Liz", song: "here's to the nights" },
          { artist: "Owen Graham", song: "Rumors" },
          { artist: "Matteo", song: "Forbidden" },
          { artist: "Conan Woolridge", song: "Memories From Home" },
          { artist: "Trevor", song: "Inner Self" },
        ],
        winner: { artist: "Matteo", song: "Forbidden" }
      },
      {
        category: "Song of the Year",
        nominees: [
          { artist: "Even Grace", song: "Alone in Kyoto" },
          { artist: "Trevor", song: "Inner Self" },
          { artist: "Conan Woolridge", song: "Memories From Home" },
          { artist: "Ava", song: "Soul For My Love" },
          { artist: "Owen Graham", song: "Rumors" },
          { artist: "Anthony", song: "lunatic" },
          { artist: "Aria", song: "Eyes On Me" },
        ],
        winner: { artist: "Trevor", song: "Inner Self" }
      },
      {
        category: "Best New Artist",
        nominees: [
          { artist: "Ava", song: "Ava" },
          { artist: "Zara", song: "Zara"},
          { artist: "Ivy Sinclair", song: "Ivy Sinclair" },
          { artist: "Anthony", song: "Anthony"},
          { artist: "Matteo", song: "Matteo" },
          { artist: "Aria", song: "Aria" },
        ],
        winner: { artist: "Ava", song: "Ava" }
      },
      {
        category: "Producer of the Year, Non-Classical",
        nominees: [
          { artist: "Trevor", song: "Trevor"},
          { artist: "Fiona", song: "Fiona" },
          { artist: "Even Grace", song: "Even Grace" },
          { artist: "Otto", song: "Otto" },
          { artist: "Anthony", song: "Anthony" },
          { artist: "Conan Woolridge", song: "Conan Woolridge" },
        ],
        winner: { artist: "Even Grace", song: "Even Grace" }
      },
      {
        category: "Songwriter of the Year, Non-Classical",
        nominees: [
          { artist: "Liz", song: "Liz" },
          { artist: "Anthony", song: "Anthony" },
          { artist: "Even Grace", song: "Even Grace" },
          { artist: "Ava", song: "Ava" },
          { artist: "Trevor", song: "Trevor" },
          { artist: "Conan Woolridge", song: "Conan Woolridge" },
        ],
        winner: { artist: "Trevor", song: "Trevor" }
      },
      {
        category: "Best Pop Vocal Album",
        nominees: [
          { artist: "Liz", song: "everlasting" },
          { artist: "Matteo", song: "Flourish" },
          { artist: "Aria", song: "Dreamscape" },
          { artist: "Ava", song: "House Of The Rising Sun" },
          { artist: "Hannah", song: "Little Mermaid (Original Soundtrack)" },
        ],
        winner: { artist: "Aria", song: "Dreamscape" }
      },
      {
        category: "Best Pop Solo Performance",
        nominees: [
          { artist: "Aria", song: "Eyes On Me" },
          { artist: "Ava", song: "Soul For My Love" },
          { artist: "Liz", song: "here's to the nights" },
          { artist: "Matteo", song: "Forbidden" },
          { artist: "Ivy Sinclair", song: "feel like sheet" },
          { artist: "Owen Graham", song: "Rumors" },
          { artist: "Hannah", song: "Part Of The World (From Little Mermaid)" }

        ],
        winner: { artist: "Aria", song: "Eyes On Me" }
      },
      {
        category: "Best Pop Duo/Group Performance",
        nominees: [
          { artist: "Fiona & Ava", song: "My Game (Remix)" },
          { artist: "Even Grace & Ava", song: "April Skies" },
          { artist: "Aria & Hannah", song: "Boom Boom" },
          { artist: "Trevor & Zion", song: "I May Destroy You" }
        ],
        winner: { artist: "Aria & Hannah", song: "Boom Boom" }
      },
      {
        category: "Best Rock/Alternative Album",
        nominees: [
          { artist: "Fiona", song: "Confessions Of A Broken Heart (Deluxe)" },
          { artist: "Conan Woolridge", song: "Forbidden Whispers" },
          { artist: "Even Grace", song: "What Ever Happened?" },
          { artist: "Anthony", song: "meaningless" }
        ],
        winner: { artist: "Conan Woolridge", song: "Forbidden Whispers" }
      },
      {
        category: "Best Rock/Alternative Performance",
        nominees: [
          { artist: "Fiona", song: "My Game" },
          { artist: "Conan Woolridge", song: "Memories From Home" },
          { artist: "Even Grace", song: "Alone in Kyoto" },
          { artist: "Anthony", song: "lunatic" }
        ],
        winner: { artist: "Conan Woolridge", song: "Memories From Home" }
      },
      {
        category: "Best Rock/Alternative Song",
        nominees: [
          { artist: "Fiona", song: "My Game" },
          { artist: "Conan Woolridge", song: "20" },
          { artist: "Even Grace", song: "Alone in Kyoto" },
          { artist: "Anthony", song: "lunatic" }
        ],
        winner: { artist: "Even Grace", song: "Alone in Kyoto" }
      },
      {
        category: "Best Rap/R&B Performance",
        nominees: [
          { artist: "Zara", song: "Nasty" },
          { artist: "Trevor", song: "Genuine Tales" },
          { artist: "Ava", song: "I Hope U Cried" },
          { artist: "Aria & Nate", song: "Journey To You" }
        ],
        winner: { artist: "Ava", song: "I Hope U Cried" }
      },
      {
        category: "Best Rap/R&B Song",
        nominees: [
          { artist: "Zara", song: "Nasty" },
          { artist: "Trevor", song: "Genuine Tales" },
          { artist: "Ava", song: "I Hope U Cried" },
          { artist: "Aria & Nate", song: "Journey To You" }
        ],
        winner: { artist: "Trevor", song: "Genuine Tales" }
      },
      {
        category: "Best Remixed Recording",
        nominees: [
          { artist: "Fiona & Ava", song: "My Game (Remix)" },
          { artist: "Aria", song: "Boom Boom (Otto's Remix)" },
          { artist: "Liza", song: "Boom Boom (Otto's Remix)" },
          { artist: "Hannah", song: "Boom Boom (Otto's Remix)" },
          { artist: "Ava", song: "Feeling (Remix)" },
          { artist: "Anthony", song: "LUNATIC PARADOX REMIX" }
        ],
        winner: { artist: "Ava & Fiona", song: "My Game (Remix)" }
      },
      {
        category: "Best Music Video",
        nominees: [
          { artist: "Matteo", song: "Forbidden" },
          { artist: "Trevor", song: "Genuine Tales" },
          { artist: "Ava", song: "Soul For My Love" },
          { artist: "Even Grace", song: "Alone in Kyoto" },
          { artist: "Liz", song: "here's to the nights" },
          { artist: "Owen Graham", song: "Rumors" },
          { artist: "Fiona", song: "My Game" }
        ],
        winner: { artist: "Trevor", song: "Genuine Tales" }
      },
      {
        category: "Best Enginereed Album, Non-Classical",
        nominees: [
          { artist: "Liz", song: "everlasting" },
          { artist: "Ava", song: "House Of The Rising Sun" },
          { artist: "Trevor", song: "KIDS SEE GHOSTS" },
          { artist: "Even Grace", song: "What Ever Happened?" },
          { artist: "Conan Woolridge", song: "Forbidden Whispers" }
        ],
        winner: { artist: "Even Grace", song: "What Ever Happened?" }
      },
      {
        category: "Best Recording Package",
        nominees: [
          { artist: "Aria", song: "Dreamscape" },
          { artist: "Liz", song: "everlasting" },
          { artist: "Ava", song: "House Of The Rising Sun" },
          { artist: "Trevor", song: "KIDS SEE GHOSTS" },
          { artist: "Anthony", song: "meaningless" },
          { artist: "Even Grace", song: "What Ever Happened?" },
          { artist: "Conan Woolridge", song: "Forbidden Whispers" }
        ],
        winner: { artist: "Even Grace", song: "What Ever Happened?" }
      },
      {
        category: "Best Album Art",
        nominees: [
          { artist: "Aria", song: "Dreamscape" },
          { artist: "Liz", song: "everlasting" },
          { artist: "Matteo", song: "Flourish" },
          { artist: "Anthony", song: "meaningless" },
          { artist: "Even Grace", song: "What Ever Happened?" },
          { artist: "Conan Woolridge", song: "Forbidden Whispers" }
        ],
        winner: { artist: "Liz", song: "everlasting" }
      },
      {
        category: "Best Single Art",
        nominees: [
          { artist: "Even Grace", song: "Beetlebum" },
          { artist: "Aria", song: "Boom Boom" },
          { artist: "Liza", song: "Boom Boom" },
          { artist: "Hannah", song: "Boom Boom" },
          { artist: "Ivy Sinclair", song: "feel like sheet" },
          { artist: "Fiona", song: "My Game (Remix)" },
          { artist: "Ava", song: "My Game (Remix)" },
          { artist: "Conan Woolridge", song: "20" },
          { artist: "Matteo", song: "What if my thoughts could speak?"},
          { artist: "Liz", song: "here's to the nights"}
        ],
        winner: { artist: "Even Grace", song: "Beetlebum" }
      }
    ]
  },
];
