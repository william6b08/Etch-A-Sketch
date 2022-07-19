const body = document.querySelector('body');

const title = document.createElement('h1');
title.innerText='Welcome to Etch-A-Sketch!'
title.setAttribute('style', 'text-align: center; background-color: yellow; color: orange')
const main_div = document.createElement('div');
const clean_btn = document.createElement('button');
clean_btn.innerText = 'Clean the board';
body.appendChild(title);
body.appendChild(main_div);
body.appendChild(clean_btn);
const row_div_attribute_value = 'justify-content: center; box-sizing: border-box';
const col_div_attribute_value = 'box-sizing: border-box; background-color: grey; border: 1px solid black; width: 30px; height: 30px';

for (let i = 0; i < 16; i++)
{
  const row_div = document.createElement('div');
  row_div.setAttribute('style', row_div_attribute_value);
  row_div.style.display = 'flex';
  main_div.appendChild(row_div);

  for (let j = 0; j < 16; j++)
  {
    const col_div = document.createElement('div');
    col_div.setAttribute('style', col_div_attribute_value);
    col_div.className = 'color-box';
    row_div.appendChild(col_div);
  }


const all_Color_Boxes = document.querySelectorAll('.color-box');

all_Color_Boxes.forEach((color_Box) => color_Box.addEventListener(
  'mouseover', ()=> color_Box.style.backgroundColor = 'aqua'))

function resetBoard()
{
  all_Color_Boxes.forEach(color_Box => {color_Box.style.backgroundColor = 'grey'})
}


clean_btn.addEventListener('click', resetBoard)
//all_Color_Boxes.forEach((color_Box) => 
//color_Box.style.backgroundColor = 'grey'));

  

}