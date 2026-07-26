
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
setTimeout(() => {
    document.getElementById("message").classList.add("show");
}, 9000);
