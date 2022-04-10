function addShape_rect(){  
    console.log("rect");
    editor.addShape('rect', {
      fill:{
        color:'transparent'
      },
      stroke: 'black',
      strokeWidth: 3,
      width: 50,
      height: 50,
      left: 140,
      top: 70,
      isRegular: false
    });
}//사각형 모형 추가

function addShape_circle(){  
  editor.addShape('circle', {
    fill:'transparent',
    stroke: 'black',
    strokeWidth: 3,
    rx: 30,
    ry: 30,
    isRegular: false
    });
}//원 모형 추가

function addShape_triangle(){  
  editor.addShape('triangle', {
    fill:{
      color:'transparent'
    },
    stroke: 'black',
    strokeWidth: 3,
    width: 50,
    height: 50,
    left: 140,
    top: 70,
    isRegular: false
    });
}//삼각형 모형 추가