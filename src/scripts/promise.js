// ==============promise对象
var getJSON = function (url) {
    return new Promise((resolve, reject)=> {
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = function handle() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    });
};

getJSON('./json/hello.json').then((json)=> {
    console.log(json);
});


export default function () {
    return "Hello World!";
}
