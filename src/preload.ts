import { Markdown } from './classes/Markdown';

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type as keyof NodeJS.ProcessVersions]);
  }

  app();
});

function app() {
  let markdown = new Markdown();

  // console.log(markdown.factories);
  let form = document.querySelector('form');

  // create buttons
  for (const key in markdown.factories) {
    // console.log(key);
    // console.log(markdown.getFactory(key));
    let factory = markdown.getFactory(key);
    //factory.getParser().parse()
    let element = markdown.getFactory(key).createElement();
    console.log(element);
    if (element.icon != '') {
      let button = document.createElement("button");
      form.appendChild(button);
      button.className = "btn btn-outline-light mx-1";
      //<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button>
      button.type = "button";
      button.innerHTML = `<i class="${element.icon}"></i>`;

      if (element.name == 'image') {
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#imageModal');
      }

      if (element.name == 'link') {
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#linkModal');
      }

      button.addEventListener('click', event => {
        event.preventDefault();
        
        let selectionStart = textarea.selectionStart;
        let selectionEnd = textarea.selectionEnd;

        let value = "";

        if (element.name == 'blockquote') {
          value = `${textarea.value.slice(0, selectionStart)}${'\n' + element.symbol + ' '}${textarea.value.slice(selectionStart, textarea.value.length)}`;
        } else {
          value = `${textarea.value.slice(0, selectionStart)}${element.symbol}${textarea.value.slice(selectionStart, selectionEnd)}${element.symbol}${textarea.value.slice(selectionEnd, textarea.value.length)}`;
        }
    
        setSourceText(value);
        setResultHTML(markdown.parseAll(value));
    
        textarea.focus();

        if (element.name == 'blockquote') {
          textarea.setSelectionRange(selectionStart + 3, selectionEnd + element.symbol.length * 2);
        } else {
          textarea.setSelectionRange(selectionStart, selectionEnd + element.symbol.length * 2);
        }
      });
    }
    // console.log(element.icon);
    //markdown.factories[key];
  }

  let textarea = document.querySelector('textarea');

  let result = document.getElementById('result');


  

  textarea.addEventListener('input', render);
  //textarea.addEventListener('keyup', render);

  function render(event: Event) {

    let value = textarea.value;

    setResultHTML(markdown.parseAll(value));
  }

  function setResultHTML(html: string) {
    result.innerHTML = html;
  }

  function setSourceText(text: string) {
    textarea.value = text;
  }

  document.getElementById("image-ok").addEventListener('click', () => {
    let selectionStart = textarea.selectionStart;
    let selectionEnd = textarea.selectionEnd;

    let link: HTMLInputElement = document.querySelector('#image-link');
    let alt: HTMLInputElement = document.querySelector('#image-alt');

    let prepared = `![${alt.value}](${link.value})`;

    let value = `${textarea.value.slice(0, selectionStart)} ${prepared} ${textarea.value.slice(selectionStart, textarea.value.length)}`;

    setSourceText(value);
    setResultHTML(markdown.parseAll(value));
  });

  document.getElementById("link-ok").addEventListener('click', () => {
    let selectionStart = textarea.selectionStart;
    let selectionEnd = textarea.selectionEnd;

    let link: HTMLInputElement = document.querySelector('#link');
    let alt: HTMLInputElement = document.querySelector('#link-name');

    let prepared = `[${alt.value}](${link.value})`;

    let value = `${textarea.value.slice(0, selectionStart)} ${prepared} ${textarea.value.slice(selectionStart, textarea.value.length)}`;

    setSourceText(value);
    setResultHTML(markdown.parseAll(value));
  });

  window.addEventListener('show.bs.modal', event => {
    let element: any = event.target;
    element.querySelectorAll('input').forEach((x: { value: string; }) => {
      x.value = '';
    });
  });

  setResultHTML(markdown.parseAll(textarea.value));
}