const BASE_API = "http://localhost:3001";

export function postAnswer(answer) {
    // Due to a bug in json-server, id needs to be string
    answer.id = String(answer.id);
    return fetch(`${BASE_API}/answers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(answer)
    });
}

export function putAnswer(answer) {
    return fetch(`${BASE_API}/answers/${answer.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(answer)
    });
}

export function deleteAnswer(id) {
    return fetch(`${BASE_API}/answers/${id}`, {
        method: "DELETE"
    });
}

export function getAnswers() {
    return fetch(`${BASE_API}/answers`).then((res) => res.json());
}