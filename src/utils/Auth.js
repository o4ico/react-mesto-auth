class Auth {
  constructor(baseUrl) {
    this._url = baseUrl;
  }

  _checkResponse (res) {
    console.log(res)
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ой ${res.status}`);
  }

  register(email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
      }
    )
    .then((res) => {
      return this._checkResponse(res);
    })
  }

  authorize(email, password) {
    const url = `${this._url}/signin`;
    return fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
      }
    )
    .then(res => {
      return this._checkResponse(res);
    });
  }

  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      return this._checkResponse(res);
    });
  } 
}

const auth = new Auth('https://auth.nomoreparties.co');

export default auth;