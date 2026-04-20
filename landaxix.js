
/* cursor */
const dot=document.getElementById('cur-dot'),ring=document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
(function loop(){rx+=(mx-rx)*.11;ry+=(my-ry)*.11;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop);})();
document.querySelectorAll('a,button,.svc-row,.sec-item,.why-cell,.proc-step').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.width='56px';ring.style.height='56px';ring.style.opacity='.3';});
  el.addEventListener('mouseleave',()=>{ring.style.width='34px';ring.style.height='34px';ring.style.opacity='.55';});
});

/* nav scroll */
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>60));

/* scroll reveal */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('iv');
      e.target.querySelectorAll&&e.target.querySelectorAll('.rl').forEach((l,i)=>setTimeout(()=>l.classList.add('iv'),i*110));
    }
  });
},{threshold:.14});
document.querySelectorAll('.fu,.story-text').forEach(el=>obs.observe(el));

/* form */
function doSubmit(btn){
  const n=document.querySelector('input[type="text"]').value.trim();
  const p=document.querySelector('input[type="tel"]').value.trim();
  if(!n||!p){alert('Please enter your name and phone number.');return;}
  btn.textContent='✓ Brief received — we\'ll call you within 2 hours.';
  btn.style.background='var(--forest3)';btn.disabled=true;
}