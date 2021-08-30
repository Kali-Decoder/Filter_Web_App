//  variables 
const imagefluid=document.querySelectorAll(".img-fluid"); 
var filename="";
const browse = document.querySelector("#inputGroupFile01");
 browse.addEventListener('change',(e)=>{
    const file = browse.files[0];
    const reader = new FileReader();
    if (file) {
      filename = file.name;
      reader.readAsDataURL(file);

    }
    reader.addEventListener(
      "load",
      () => {
        img = new Image();
        var src=reader.result;
        imagefluid[0].setAttribute('src',src);
        imagefluid[1].setAttribute('src',src);
      },
      false
    );
 });
document.addEventListener('input',(e)=>{
    if(e.target.id==='blur')
    {
        imagefluid[1].style.filter=`blur(${e.target.value}px)`;
    }
    else if(e.target.id==='brightness')
    {
        imagefluid[1].style.filter=`brightness(${e.target.value}%)`;
    }
    else if(e.target.id==='contrast')
    {
        imagefluid[1].style.filter=`contrast(${e.target.value}%)`;
    }
    else if(e.target.id==='dropshadow')
    {
        imagefluid[1].style.filter=`drop-shadow(${Math.round(Math.random()*e.target.value)}px,${Math.round(Math.random()*e.target.value)}px,${Math.round(Math.random()*e.target.value)}px,gray)`;
    }
    else if(e.target.id==='saturate')
    {
        imagefluid[1].style.filter=`saturate(${e.target.value})`;
    }
    else if(e.target.id==='grayscale')
    {
        imagefluid[1].style.filter=`grayscale(${e.target.value}%)`;
    }
    else if(e.target.id==='huerotate')
    {
        imagefluid[1].style.filter=`hue-rotate(${e.target.value}deg)`;
    }
    else if(e.target.id==='invert')
    {
        imagefluid[1].style.filter=`invert(${e.target.value}%)`;
    }
    else if(e.target.id==='opacity')
    {
        imagefluid[1].style.filter=`opacity(${e.target.value}%)`;
    }
    else if(e.target.id==='sepia')
    {
        imagefluid[1].style.filter=`sepia(${e.target.value}%)`;
    }
}) ;
// const download=document.querySelector("#download");
// download.addEventListener('click',()=>{
//     const fileExtention=filename.slice(-4);
//           let newFileName='';
//           if(fileExtention==='.jpg' || fileExtention==='.png')
//           {
//               newFileName=filename.substring(0,filename.length-4)+'-edited.jpg';

//           }
//     Download(newFileName);
// });
// function Download(filename)
//   {
//       let e;
//       const link=document.createElement("a");
//       link.href=filename;
      
//     //   link.href=canvas.toDataURL('image/jpeg',0.8);
//     //   e=new MouseEvent('click');
//     //   link.dispatchEvent(e);
//   }

const remove=document.querySelector("#remove");
remove.addEventListener('click',()=>{
    imagefluid[1].style.filter='none';
})