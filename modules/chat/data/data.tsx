export const userData = [
  {
    id: 1,
    avatar: "/IaUser.webp",
    messages: [
      {
        id: 1,
        avatar: "/IaUser.webp",
        name: "Jane Doe",
        message: "Hi, i'm the Cin Logos Ai. How can I help you today?",
      },
    ],
    name: "Jane Doe",
  },
];

export type UserData = (typeof userData)[number];

export const loggedInUserData = {
  id: 5,
  avatar: "/LoggedInUser.jpg",
  name: "Jakob Hoeg",
};

export type LoggedInUserData = typeof loggedInUserData;

export interface Message {
  id: number;
  avatar: string;
  name: string;
  message: string;
}

export interface User {
  id: number;
  avatar: string;
  messages: Message[];
  name: string;
}
