export function smoothScroll(scrollTargetY, speed = 1000) {
  let currentTime = 0;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;

  const time = Math.abs(scrollY - scrollTargetY) / speed;

  const easeInOutCubic = (pos) => {
    if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3);
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
  };

  function runAnimation() {
    currentTime += 1 / 60;

    let p = currentTime / time;
    let t = easeInOutCubic(p);

    if (p < 1) {
      requestAnimationFrame(runAnimation);
      window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
    } else {
      window.scrollTo(0, scrollTargetY);
    }
  }

  runAnimation();
}

export function throttle(fn, wait = 600) {
  let time = Date.now();

  return function (event) {
    if (Math.abs(event.deltaY) < 5) return;

    if (time + wait - Date.now() < 0) {
      fn(event);
      time = Date.now();
    }
  };
}

 export function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

