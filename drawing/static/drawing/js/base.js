var editor = new tui.ImageEditor('#tui-image-editor', {
  cssMaxWidth: 1000,
  cssMaxHeight: 500,
  usageStatistics: false,  
});


/*
 setTimeout(() => {
  
 }, 1000);
 */


function loadImage_file(){
  var file = document.querySelector('#il');
  editor.loadImageFromFile(file.files[0]).then(result => {
    console.log('old : ' + result.oldWidth + ', ' + result.oldHeight);
    console.log('new : ' + result.newWidth + ', ' + result.newHeight);
  });
  const imgEditor = document.querySelector('#tui-image-editor'); //tui-image-editor wrap
  const canvas = document.querySelector('.lower-canvas'); //lower-canvas or upper-canvas
  console.dir(canvas);

  let canvasWidth;
  let canvasHeight;
  setTimeout(() => {
    canvasWidth = canvas.style.maxWidth;
    canvasHeight = canvas.style.maxHeight;
    //console.log(canvasWidth);
    //console.log(canvasHeight);
    imgEditor.setAttribute('style', `width:${canvasWidth}; height:${canvasHeight};`);
  }, 10);
}

function applyFilter_Grayscale(){
  editor.applyFilter('Grayscale');
} //이미지가 로드 되어야 함.

function applyFilter_Noise(){
  editor.applyFilter('Noise');
} 
function applyFilter_Sepia(){
  editor.applyFilter('Sepia');
} 
function applyFilter_Emboss(){
  editor.applyFilter('Emboss');
} 
function applyFilter_Pixelate(){
  editor.applyFilter('Pixelate');
} 
function applyFilter_Invert(){
  editor.applyFilter('Invert');
} 
function applyFilter_Sharpen(){
  editor.applyFilter('Sharpen');
} 
//--------------------------------
function addText(){
  editor.addText('abcd', {
    styles: {
        fill: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    },
    autofocus:false
}).then(objectProps => {
    console.log(objectProps.id);
});
}//텍스트 추가

