const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')

    }
    // else{
    //   entry.target.classList.remove('show')
    // }

  });

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(element=>observer.observe(element));
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show')

    }
    // else{
    //   entry.target.classList.remove('show')
    // }

  });

});

const hiddenElements1 = document.querySelectorAll('.hidden1');
hiddenElements1.forEach(element=>observer.observe(element));
