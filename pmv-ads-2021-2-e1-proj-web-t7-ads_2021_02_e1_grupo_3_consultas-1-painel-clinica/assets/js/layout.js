import auth from './db/auth.js';

const handleLayout = async () => {
    let loggedUser = auth.getUser();
    const partials = document.querySelectorAll('[data-partial]');
    let urls = [];
    partials.forEach((partial) => {
        let partialName = partial.getAttribute('data-partial');
        if (loggedUser && 'role' in loggedUser) {
            switch (loggedUser.role) {
                case 'patient':
                case 'clinic':
                    partialName = partial.getAttribute(`data-${loggedUser.role}`) ?? partialName;
                    break;
            }
        }
        urls.push({
            url: `./partials/${partialName}.html`,
            node: partial,
        });
    });
    await Promise.all(urls.map(async ({url, node}) => {
        const res = await fetch(url);
        const contents = await res.text();
        const template = document.createElement('template');
        template.innerHTML = contents;
        const child = template.content.firstChild;
        node.replaceWith(child);
        const scripts = child.querySelectorAll('script');
        scripts.forEach( (script) => {
            const injectedScript = document.createElement("script");
            Array.from(script.attributes).map(attr => {
                injectedScript.setAttribute(attr.name, attr.value);
            })
            injectedScript.appendChild(document.createTextNode(script.innerHTML));
            child.replaceChild(injectedScript, script);
        });
    }));
}

document.addEventListener('DOMContentLoaded', () => {
    handleLayout();
});
