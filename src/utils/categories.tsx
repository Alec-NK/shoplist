import {
  GiCannedFish,
  GiSlicedBread,
  GiSpoon,
  GiBroom,
  GiBerriesBowl,
} from "react-icons/gi";
import { MdSevereCold } from "react-icons/md";
import { TbMilk, TbMeat, TbApple, TbCarrot } from "react-icons/tb";
import { BsCupStraw } from "react-icons/bs";

export const categories = [
  {
    value: "meat",
    text: "Carne",
    icon: <TbMeat />,
  },
  {
    value: "latc",
    text: "Laticínio",
    icon: <TbMilk />,
  },
  {
    value: "freez",
    text: "Frios",
    icon: MdSevereCold,
  },
  {
    value: "fruit",
    text: "Fruta",
    icon: <TbApple />,
  },
  {
    value: "vegetable",
    text: "Verdura",
    icon: <TbCarrot />,
  },
  {
    value: "cereal",
    text: "Cereal",
    icon: <GiBerriesBowl />,
  },
  {
    value: "canned",
    text: "Enlatado",
    icon: <GiCannedFish />,
  },
  {
    value: "bakery",
    text: "Padaria",
    icon: <GiSlicedBread />,
  },
  {
    value: "beverage",
    text: "Bebidas",
    icon: <BsCupStraw />,
  },
  {
    value: "utensils",
    text: "Utensílios",
    icon: <GiSpoon />,
  },
  {
    value: "hygiene",
    text: "Higiene e limpeza",
    icon: <GiBroom />,
  },
];
