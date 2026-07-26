
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
const lines = [
    {
        id: "line1",
        text: "फूल"
    },
    {
        id: "line2",
        text: "For my FOOL❤️"
    },
    {
        id: "line3",
        text: "HAHAHAH-----"
    },
    {
        id: "signature",
        text: "iloveyou"
    }
];

function typeWriter(element, text, speed = 55) {
    return new Promise(resolve => {
        let i = 0;

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }

        type();
    });
}

async function showMessage() {

    document.getElementById("message").classList.add("show");

    await new Promise(r=>setTimeout(r,1000));

    for(const item of lines){

        const el=document.getElementById(item.id);

        await typeWriter(el,item.text);

        await new Promise(r=>setTimeout(r,800));

    }

}

setTimeout(showMessage,9000);
