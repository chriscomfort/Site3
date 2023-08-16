document.addEventListener('mousemove', function(event){
    clearInterval(startup);
    cardMoving(event);
  });
  
  window.setInterval(function(){
    changeTapeText();
  }, 5);
  
  let startup = setInterval(startupFun,5);
  let startup_x = 0;
  let startup_y = window.innerHeight*0.86;
  let way =1;
  let speed =8;
  function startupFun(){
    if(startup_x>= window.innerWidth){
      way =1 
    }else if (startup_x <0){
      way =0
    }
    if(way==0){
      startup_x+=speed;
    }else{
      startup_x-=speed;
    }
    var event;
    event= {
    clientX :startup_x,
    clientY : startup_y};
    cardMoving(event);
  }
  function cardMoving(event){
  
      let card_x = getTransformValue(event.clientX,window.innerWidth,56);
    let card_y = getTransformValue(event.clientY,window.innerHeight,56);
    let shadow_x = getTransformValue(event.clientX,window.innerWidth,20);
    let shadow_y = getTransformValue(event.clientY,window.innerHeight,20);
    let text_shadow_x = getTransformValue(event.clientX,window.innerWidth,28);
    let text_shadow_y = getTransformValue(event.clientY,window.innerHeight,28);
    $(".floating").css("transform","rotateX("+card_y+"deg) rotateY("+card_x+"deg)");
    $(".floating").css("box-shadow",-card_x+"px "+card_y+"px 55px rgba(0, 0, 0, .55)");
    $(".svg").css("filter","drop-shadow("+-shadow_x+"px "+shadow_y+"px 4px rgba(0, 0, 0, .6))");
    $(".text").css("text-shadow",-text_shadow_x+"px "+text_shadow_y+"px 6px rgba(0, 0, 0, .8)");
    let textx = getTransformValue(event.clientX,window.innerWidth,5);
    let texty = getTransformValue(event.clientY,window.innerHeight,5);
    changeHologram(event.clientX,event.clientY);
  }
  
  function changeTapeText(){
    let text=""
    for(let i = 0; i<190;i++){
      text+=""+Math.round(Math.random());
    }
    $(".tape").html(text);
  }
  function getTransformValue(v1,v2,value){
    return ((v1/v2*value-value/2)*1).toFixed(1);                        
  }
  $(function(){
    setTimeout(function(){
      $("body").removeClass("active");
    }, 2800);
  });
  
  function changeHologram(x,y){
    let angle1=getHologramColor(x,window.innerWidth);
    let angle2=getHologramColor(y,window.innerHeight);
    $("head").append("<style>.hologram:before{transform: rotate("+((angle1/2+angle2/2)*0.8).toFixed(1)+"deg);}</style>")
    $(".hologram_icon").css("background-image","url(\"data:image/svg+xml;charset=utf8,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='90px' height='66px' viewBox='0 0 1200 1200' enable-background='new 0 0 1200 1200' xml:space='preserve'%3E%3Cg%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:hsl("+angle1+",83%,50%);stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:hsl("+angle2+",83%,50%);stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23grad1)' d='M583.316,788.41c0,0-59.29,92.945-121.776,113.764c0,0-56.089,48.103-67.315,40.102 c0,0-222.749,147.415-73.738,15.989c0,0-78.52,52.903-104.142,62.504c0,0-118.588,67.324-17.649-12.805L233.96,983.9 c0,0-129.797,60.905-144.224,60.905c0,0-80.12,22.442-12.823-20.843l54.468-33.624c0,0-22.417,3.194,9.66-14.452 c0,0,100.927-57.688,118.57-76.898c0,0-105.784,38.434-43.266-6.425l86.524-48.076c0,0-86.524,14.429-4.784-27.233l97.725-48.078 c0,0-168.243,16.004-35.24-22.427l84.935-24.053c0,0-105.77-8.027-40.052-24.013c65.688-16.023,101.021-9.276,108.314-8.937 c0,0-9.126-9.105-4.749-15.656c0,0-12.74-13.456-10.182-17.478c0,0-24.395,1.834-13.449-22.207c0,0-20.059-12.73-6.571-28.782 c0,0-15.682-7.631-4.731-23.645c0,0-17.478-6.552-7.639-18.212c0,0-3.312-5.813,0-7.646c0,0-21.495-12.02,3.616-28.022 c0,0-22.207-5.454-5.457-22.194c0,0-14.918-10.582-0.355-22.984c0,0,10.561-13.786,21.48-17.082c0,0-51.344-14.229-22.196-32.421 l18.896-3.244l-16.351-5.851c0,0-36.429-33.526,14.556-32.051c0,0-46.602-42.569-1.104-45.863l10.55,1.105 c0,0-22.933-18.239-13.449-32.444c0,0,2.555-13.434,19.65-10.529c0,0-19.65-41.529,2.188-43.704c0,0,8.365-2.542,12.383,0.405 c0,0-28.021-65.947-5.812-56.113l58.61,48.813c0,0-72.816-134.744-27.325-98.316l77.915,101.218c0,0,13.861-2.532,19.307,2.911 c0,0-6.937-14.931-12.012-17.464c0,0,7.632-0.713,20.766,18.188c0,0-20.021-61.521-19.306-76.812 c0.714-15.288-0.358-51.689,12.027-22.956c0,0,52.058,137.251,55.315,168.564c0,0,12.021,32.445,10.583,43.7 c0,0,26.946,41.158,20.368,81.934c-6.559,40.755,27.313,125.959,36.069,135.444c8.702,9.464,8.362,24.025,52.802,9.809 c44.407-14.183,78.29-15.263,91.74-11.245c13.478,3.983,32.021,8.714,24.382,27.663c0,0,9.472,21.114-17.478,52.403 c0,0,0.717-10.541-6.192-6.538c0,0-22.213,11.64-27.671,10.186c0,0-34.937,21.496-42.568,20.782c0,0,43.332,37.126,88.834,56.388 c45.517,19.319,58.954,37.519,70.255,48.444c11.3,10.939,52.801,35.69,64.42,40.407c11.675,4.746,39.327,28.048,63.728,26.594 c24.395-1.447,42.257-10.568,20.782,4.354c0,0-36.426,6.928-52.814-2.904c0,0,10.51,16.494,36.069,16.054 c0.475,0,0.922-0.026,1.42-0.026c26.617-1.106-7.645,6.525-22.563,6.932c-14.926,0.368-36.027,1.423-38.578-2.201l23.652,29.139 c0,0,12.381,11.983-8.718,9.44c0,0-40.789-5.113-48.071-22.574c0,0,17.834,43.712-2.54,40.431c0,0-39.686-9.453-44.792-26.948 c0,0,0.727,25.119-9.459,24.033c0,0-41.869-0.732-40.786-21.47c0,0-2.899,25.858-26.222,22.208c0,0-26.59-1.834-25.831-14.587 c0,0-10.952,16.764-30.604,14.218c0,0-17.835,0-13.461-12.359c0,0-37.506,19.659-28.053-8.062l13.495-26.94l-25.148,25.857 c0,0-21.091,11.332-26.557-7.616c0,0-25.496,5.086-28.403,1.078c0,0-25.119,2.163-29.857-6.929c0,0-25.842,1.104-17.457-8.726 c0,0-23.675-5.8-17.487-11.663c0,0-22.585-0.712-17.488-14.561c0,0-30.569-5.086-24.045-17.822c0,0-27.296-5.469-18.184-22.562 c0,0-19.312-5.851-11.658-18.215c0,0-30.938-12.044-15.27-22.219C590.97,790.608,584.028,791.299,583.316,788.41z'/%3E%3C/g%3E%3C/svg%3E\")");
  }
  
  function getHologramColor(v1,v2){
    return (v1/v2*360).toFixed(1);
  }