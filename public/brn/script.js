const url = new URL(
    "http://auth-api.brn.com/api/login"
);

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

let body = {
    "email": "aryaanggara.dev@gmail.com",
    "password": "isipassword"
}

fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
}).then(response => response.json());