(function(){
  const btn=document.querySelector('[data-menu]');
  const mobile=document.querySelector('[data-mobile-nav]');
  if(btn&&mobile){
    const closeMenu=()=>{ mobile.classList.remove('open'); btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-label','Open menu'); };
    btn.addEventListener('click',()=>{
      const open=mobile.classList.toggle('open');
      btn.setAttribute('aria-expanded',String(open));
      btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    });
    mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  }
  document.querySelectorAll('.v6-specialty-menu>button').forEach(t=>{
    t.addEventListener('click',e=>{
      e.stopPropagation();
      const parent=t.parentElement;
      const open=parent.classList.toggle('open');
      t.setAttribute('aria-expanded',String(open));
      document.querySelectorAll('.v6-specialty-menu').forEach(menu=>{
        if(menu!==parent){menu.classList.remove('open');menu.querySelector(':scope>button')?.setAttribute('aria-expanded','false');}
      });
    });
  });
  document.querySelectorAll('.v6-cardio-toggle').forEach(t=>{
    t.addEventListener('click',e=>{e.stopPropagation(); const open=t.parentElement.classList.toggle('open'); t.setAttribute('aria-expanded',String(open));});
  });
  document.querySelectorAll('[data-mobile-specialties]').forEach(t=>{
    t.addEventListener('click',()=>{const open=t.parentElement.classList.toggle('open');t.setAttribute('aria-expanded',String(open));});
  });
  document.querySelectorAll('[data-mobile-cardio]').forEach(t=>{
    t.addEventListener('click',()=>{const open=t.parentElement.classList.toggle('open');t.setAttribute('aria-expanded',String(open));});
  });
  document.addEventListener('click',e=>{
    document.querySelectorAll('.v6-specialty-menu.open').forEach(menu=>{
      if(!menu.contains(e.target)){menu.classList.remove('open');menu.querySelector(':scope>button')?.setAttribute('aria-expanded','false');}
    });
  });

  const path=location.pathname.replace(/\/+$/,'')||'/';
  document.querySelectorAll('.v6-nav>a').forEach(a=>a.classList.remove('active'));
  if(path==='/'||path==='') document.querySelector('.v6-nav>a[href="./"]')?.classList.add('active');
  if(path.startsWith('/specialities')) document.querySelector('.v6-specialty-menu')?.classList.add('current');
  if(path.startsWith('/about-us')) document.querySelector('.v6-nav>a[href="about-us/"]')?.classList.add('active');
  if(path.startsWith('/contact-us')) document.querySelector('.v6-nav>a[href="contact-us/"]')?.classList.add('active');

  document.querySelectorAll('.faq button').forEach(b=>b.addEventListener('click',()=>{
    const f=b.parentElement;f.classList.toggle('open');const plus=b.querySelector('.plus');if(plus)plus.textContent=f.classList.contains('open')?'−':'+';
  }));

  const params=new URLSearchParams(location.search);
  const keys=['gclid','gbraid','wbraid','utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
  keys.forEach(k=>{const v=params.get(k);if(v)localStorage.setItem('ph_'+k,v);});
  document.querySelectorAll('form[data-demo-form]').forEach(form=>{
    keys.forEach(k=>{const input=form.elements[k];if(input)input.value=params.get(k)||localStorage.getItem('ph_'+k)||'';});
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const phone=form.elements.phone?.value.trim()||'';
      if(phone && !/^\d{10}$/.test(phone)){alert('Please enter a valid 10-digit phone number.');return;}
      const success=form.querySelector('.success'); if(success)success.style.display='block';
      window.dataLayer=window.dataLayer||[];
      window.dataLayer.push({event:'appointment_form_success',page:location.pathname});
    });
  });
})();