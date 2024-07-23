export const headerLinks = [
  {
    label: "Accueil",
    route: "/",
  },
  {
    label: "Créer un évènement",
    route: "/events/create",
  },
  {
    label: "Mon profil",
    route: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
