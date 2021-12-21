import { Article, Tags } from "../../interfaces";

export const tags: Tags = {
  RxJS: { name: "RxJS", backgroundColor: "#FAFAFA", fontColor: "#F9F9F9" },
  Javascript: {
    name: "Javascript",
    backgroundColor: "#EFD81D",
    fontColor: "#000000",
  },
  Typescript: {
    name: "Typescript",
    backgroundColor: "#1D7BC4",
    fontColor: "#F9F9F9",
  },
  ThreeJS: {
    name: "ThreeJS",
    backgroundColor: "#222222",
    fontColor: "#F9F9F9",
  },
  GLSL: { name: "GLSL", backgroundColor: "#414141", fontColor: "#F9F9F9" },
  Alexa: { name: "Alexa", backgroundColor: "#2485B5", fontColor: "#F9F9F9" },
  Vue3: { name: "Vue3", backgroundColor: "#41B883", fontColor: "#F9F9F9" },
  Vue2: { name: "Vue2", backgroundColor: "#41B883", fontColor: "#F9F9F9" },
  Angular: {
    name: "Angular",
    backgroundColor: "#DD0031",
    fontColor: "#F9F9F9",
  },
};

export const Articles: Article[] = [
  {
    name: "Build Single Page App with Rx [From scratch]",
    file: "Build_Single_Page_App_with_Rx_From_scratch",
    picturesExtension: ".gif",
    tags: [tags.RxJS, tags.Javascript],
    date: "09/01/2021",
  },
  {
    name: "Create a background with GLSL Shader [Threejs | Typescript]",
    file: "Create_background_with_GLSL_Shader",
    picturesExtension: ".gif",
    tags: [tags.ThreeJS, tags.GLSL, tags.Typescript],
    date: "17/11/2020",
  },
  {
    name: "Run your own Alexa Skill locally (and test it) [JS]",
    file: "Run_your_own_Alexa_Skill_locally_and_test_it",
    picturesExtension: ".gif",
    tags: [tags.Alexa, tags.Javascript],
    date: "05/12/2020",
  },
  {
    name: "Update of Vue Rx to Vue Next Rx",
    file: "Update_of_Vue_Rx_to_Vue_Next_Rx",
    tags: [tags.Vue3, tags.RxJS],
    picturesExtension: ".jpg",
    date: "18/12/2020",
  },
];
