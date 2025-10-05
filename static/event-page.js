(function(){
  // Simple image sets to mirror TSX logic
  var imageData = {
    satellite: [
      'https://images.unsplash.com/photo-1574786577070-70b30e49c99c?w=800',
      'https://images.unsplash.com/photo-1636565214233-6d1019dfbc36?w=800'
    ],
    sar: [
      'https://images.unsplash.com/photo-1631067280720-8ca7422e22c2?w=800',
      'https://images.unsplash.com/photo-1574786577070-70b30e49c99c?w=800'
    ],
    thermal: [
      'https://images.unsplash.com/photo-1700081744390-53ac7df645ac?w=800',
      'https://images.unsplash.com/photo-1631067280720-8ca7422e22c2?w=800'
    ]
  };

  var selectedType = 'satellite';
  var currentIndex = 0;

  var imageEl = document.getElementById('carousel-image');
  var prevBtn = document.getElementById('prev');
  var nextBtn = document.getElementById('next');
  var counterEl = document.getElementById('counter');
  var typeButtons = document.querySelectorAll('.type-btn');

  function updateCarousel(){
    var images = imageData[selectedType];
    if(!images) return;
    if(currentIndex < 0) currentIndex = images.length - 1;
    if(currentIndex >= images.length) currentIndex = 0;
    if(imageEl){
      imageEl.src = images[currentIndex];
      imageEl.alt = selectedType + ' image ' + (currentIndex + 1);
    }
    if(counterEl){
      counterEl.textContent = (currentIndex + 1) + ' / ' + images.length;
    }
  }

  if(prevBtn) prevBtn.addEventListener('click', function(){ currentIndex--; updateCarousel(); });
  if(nextBtn) nextBtn.addEventListener('click', function(){ currentIndex++; updateCarousel(); });
  if(typeButtons) typeButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var t = btn.getAttribute('data-type');
      if(!t) return;
      selectedType = t;
      currentIndex = 0;
      // switch button styles
      typeButtons.forEach(function(b){ b.classList.remove('border-purple-500','bg-purple-500/10'); b.classList.add('border-gray-300'); });
      btn.classList.add('border-purple-500','bg-purple-500/10');
      btn.classList.remove('border-gray-300');
      updateCarousel();
    });
  });
  updateCarousel();

  // Before/After compare slider
  var compare = document.getElementById('compare');
  var beforeWrap = document.getElementById('before-wrap');
  var slider = document.getElementById('slider');
  var overlay = document.getElementById('overlay');

  function setPosition(px){
    if(!compare || !beforeWrap || !slider) return;
    var rect = compare.getBoundingClientRect();
    var x = Math.max(0, Math.min(rect.width, px - rect.left));
    var pct = (x / rect.width) * 100;
    beforeWrap.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
    slider.style.left = pct + '%';
  }

  // Drag to control slider
  var dragging = false;
  if(compare){
    compare.addEventListener('pointerdown', function(e){ dragging = true; setPosition(e.clientX); compare.setPointerCapture(e.pointerId); });
    compare.addEventListener('pointermove', function(e){ if(dragging){ setPosition(e.clientX); } });
    compare.addEventListener('pointerup', function(e){ dragging = false; compare.releasePointerCapture(e.pointerId); });
    compare.addEventListener('pointerleave', function(){ dragging = false; });
  }

  if(overlay && beforeWrap){
    overlay.addEventListener('change', function(){
      // 50% opacity overlay vs hard split handled via opacity on beforeWrap
      beforeWrap.style.opacity = overlay.checked ? '0.5' : '1';
    });
  }
})();


