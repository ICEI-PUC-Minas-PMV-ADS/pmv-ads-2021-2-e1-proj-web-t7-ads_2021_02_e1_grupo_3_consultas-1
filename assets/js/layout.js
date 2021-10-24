const handleLayout = async () => {
    const partials = document.querySelectorAll('[data-partial]');
    let urls = [];
    partials.forEach((partial, index) => {
        urls.push({
            url: `./partials/${partial.getAttribute('data-partial')}.html`,
            node: partial,
        })
    });
    await Promise.all(urls.map(async ({url, node}) => {
        const res = await fetch(url);
        const contents = await res.text();
        const template = document.createElement('template');
        template.innerHTML = contents;
        node.replaceWith(template.content.firstChild);
    }));
}

document.addEventListener('DOMContentLoaded', () => {
    handleLayout();
});
