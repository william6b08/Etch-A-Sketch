const body = document.querySelector('body');
let brush_color = 'black';

/* Create a heading for title */
const title = document.createElement('h1');
title.innerText='Welcome to Etch-A-Sketch!'
title.setAttribute('style', 'text-align: center; background-color: yellow; color: orange')



/* Create a clean button to wipe the board clean */
const clean_btn = document.createElement('button');
clean_btn.innerText = 'Clean the board';

/* Create a color palette for user to choose brush color */
const color_Palette = document.createElement('div');
color_Palette.style.display = 'flex';
color_Palette.style.justifyContent = 'space-evenly';
color_Palette.innerText = 'Pick a color!';

function updateBrushColor() // when you click on a color, a div should appear to show
{
  current_Color_para.innerText = `Your brush is ${brush_color}`;
  current_Color.setAttribute('style', `background-color: ${brush_color}; border: 1px solid black; width: 50px; height: 30px; margin: 10px auto`);
}

const colors = ['red','orange','blue', 'purple', 'black', 'pink', 'aqua'];
for (const color of colors)
{
  const color_palette_div = document.createElement('div');
  color_palette_div.classList.add(`color-${color}`);
  color_palette_div.setAttribute('style', `background-color: ${color}; border: 1px solid black; width: 50px; height: 30px;`);
  color_palette_div.addEventListener('click', ()=> pickColor(color_palette_div));
  color_palette_div.addEventListener('click', updateBrushColor);
  color_Palette.appendChild(color_palette_div);
  
}


/*Create a div to indicate current brush color */
const current_Color_para = document.createElement('p');
const current_Color = document.createElement('div');
current_Color.setAttribute('style', `background-color: ${brush_color}; border: 1px solid black; width: 50px; height: 30px; margin: 10px auto`);
current_Color_para.setAttribute('style', 'text-align: center')
current_Color_para.innerText = `Your brush is ${brush_color}`;



/* Create a drawing area */
const main_div = document.createElement('div');

body.appendChild(title);
body.appendChild(main_div);
body.appendChild(clean_btn);
body.appendChild(current_Color_para);
body.appendChild(current_Color);
body.appendChild(color_Palette);
const collection = body.children;
for (const component of collection)
{
  component.style.margin = '10px auto';
}

/* Create a 16 x 16 divs for the drawing area */
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
    col_div.classList.add('color-box');
    row_div.appendChild(col_div);
  }





function resetBoard()
{
  all_Color_Boxes.forEach(color_Box => {color_Box.style.backgroundColor = 'grey'})
}

function pickColor(color_div)
{
  brush_color = color_div.style.backgroundColor;
}


const all_Color_Boxes = document.querySelectorAll('.color-box');

all_Color_Boxes.forEach((color_Box) => color_Box.addEventListener(
  'mouseover', ()=> color_Box.style.backgroundColor = brush_color));

clean_btn.addEventListener('click', resetBoard);


  

}