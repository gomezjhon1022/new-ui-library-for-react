import { render } from '@testing-library/react';
import MediaImg from './MediaImg';

describe('@components/MediaImg', () => {
  it("kinewofinweoifnoine", () => {
    //arrange
    const { getByRole } = render(
      <MediaImg alt="PlatziCoolImg" src="http://www.platziversosupercool.com/img" />
    );
    //act
    const MediaImgTest = getByRole('img')
    //assert
    expect(MediaImgTest).toBeInTheDocument();
    expect(MediaImgTest).toHaveAttribute("src", "http://www.platziversosupercool.com/img")
    expect(MediaImgTest).toHaveAttribute("alt", "PlatziCoolImg" )
  })

  it('testeando border radius, width and height',()=>{
    const {getByRole} = render(<MediaImg src='https://davc93.github.io' alt='PlatziCool'/>)
    const MediaImgTest = getByRole('img');
    expect(MediaImgTest).toHaveStyle("width:100px;height:100px;border-radius:16px;");
    })
})