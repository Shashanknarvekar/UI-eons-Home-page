const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal(`.navbar, .hero,
          .setup, .information,
          footer`, {
  interval: 200
})