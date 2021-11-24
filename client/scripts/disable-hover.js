let disable = (pageLocation) => {
    if (window.location.href.indexOf(pageLocation) > -1) {
        const a = document.getElementById(pageLocation.substr(0, pageLocation.indexOf('.')).toLowerCase())
        a.style["color"] = "yellow"
        a.classList.add('noHover')
    }
}