(function(){
  var box=document.createElement('div');box.className='lb';
  box.innerHTML='<img alt=""/><p></p>';document.body.appendChild(box);
  var img=box.querySelector('img'),cap=box.querySelector('p');
  document.addEventListener('click',function(e){
    var a=e.target.closest('a[data-zoom]');
    if(a){e.preventDefault();img.src=a.getAttribute('href');
      var f=a.closest('figure'),c=f&&f.querySelector('figcaption');
      cap.textContent=c?c.textContent:'';img.alt=cap.textContent;box.classList.add('open');return;}
    if(box.classList.contains('open')&&e.target.closest('.lb'))box.classList.remove('open');
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')box.classList.remove('open');});
})();
