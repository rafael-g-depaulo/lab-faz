import render from "Utils/render";

import Display from "./Display";
import { CoursePresentation } from "Api/CoursePresentation";

const coursesPresentationExample = {
  course_presentation_title: "Isso é um exemplo",
  course_presentation_first_text: "Primeiro parágrafo",
  course_presentation_second_text: "Segundo parágrafo",
};

const cardExample: CoursePresentation[] = [
  {
    title: "Teste",
    subtitle: "iluminação",
    description: "Descrição aqui",
    finish_date: new Date("2020-08-05Z15:00:00"),
    banner_image: {
      url: "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      alternativeText: "imagem aleatória",
      caption: "",
      width: 0,
      height: 0,
      ext: "jpeg",
    },
    finished: true,
  },
];

it("renders CoursesPresentation component", () => {
  expect(() =>
    render(
      <Display texts={coursesPresentationExample} courses={cardExample} />
    )
  ).not.toThrow();
});

describe("Check content of CoursesPresentation component", () => {
  const { getByText } = render(
    <Display texts={coursesPresentationExample} courses={cardExample} />
  );

  it("checks if title rendered", () => {
    const title = getByText("Isso é um exemplo");
    expect(title).toHaveTextContent("Isso é um exemplo");
  });

  it("checks if the first paragraph rendered", () => {
    const firstParagraph = getByText("Primeiro parágrafo");
    expect(firstParagraph).toHaveTextContent("Primeiro parágrafo");
  });

  it("checks if the second paragraph rendered", () => {
    const secondParagraph = getByText("Segundo parágrafo");
    expect(secondParagraph).toHaveTextContent("Segundo parágrafo");
  });
});
