export const commands = [
  {
    entries: [
      {
        title: "About Me",
        author: {
          firstName: "Adebayo",
          lastName: "Moses",
        },
      },
    ],
  },
  {
    title: "Blog",
    entries: [
      {
        title: "Introducing Sandbox",
        author: {
          firstName: "Adebayo",
          lastName: "Moses",
        },
      },
    ],
  },
  {
    title: "Social",
    entries: [
      {
        title: "Twitter",
        author: {
          firstName: "Moses",
          lastName: "A.",
        },
      },
      {
        title: "LinkedIn",
        author: {
          firstName: "Adebayo",
          lastName: "Moses",
        },
      },
      {
        title: "GitHub",
        author: {
          firstName: "Adebayo",
          lastName: "Moses",
        },
      }
    ],
  },
];

export const options = {
  shouldSort: false,
  threshold: 0.3,
  maxPatternLength: 32,
  includeScore: true,
  includeMatches: true,
  keys: ["entries.title"],
};
