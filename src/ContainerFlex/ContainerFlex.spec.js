import { render } from "@testing-library/react";
import ContainerFlex from "./ContainerFlex";
import '@testing-library/jest-dom'

describe('@componets/ContainerFlex', () => {
  it('onmwedoifnwonf', () => {
    //arrange
    const { getByRole } = render(
      <ContainerFlex role="banner" />
    )
    //act
    const ContainerFlexTest = getByRole("banner")
    //assert
    expect(ContainerFlexTest).toBeDefined();
  });

  it('mensaje', ()=> {
    // arrange
    const { getByRole } = render(
        <ContainerFlex bgcolor={3} justifyContent="center" role="banner" />
    )

    // act
    const ContainerFlexTest = getByRole('banner')

    // assert
    expect(ContainerFlexTest).toBeDefined();
  })

  it('mensaje', ()=> {
    // arrange
    const { getByRole } = render(
        <ContainerFlex bgcolor="red" justifyContent="center" role="banner" />
    )

    // act
    const ContainerFlexTest = getByRole('banner')

    // assert
    expect(ContainerFlexTest).toBeDefined();

  })

  it('Comprobar si tiene background azul',() => {
    // arrange

    const { getByRole } = render(
        <ContainerFlex role='banner' bgColor='blue' />
    )
    // act

    const ContainerFlexTest = getByRole('banner')
    // assert
    expect(ContainerFlexTest).toHaveStyle('background-color:blue;');
})
});