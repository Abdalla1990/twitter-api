import easyScroll from 'easy-scroll';
 
export let scrollDirection = (component,direction,duration,amount)=>{

  easyScroll({
    'scrollableDomEle': component,
    'direction': direction,
    'duration': duration,
    'easingPreset': 'easeInOutQuad',
    'scrollAmount': amount
  });
}
