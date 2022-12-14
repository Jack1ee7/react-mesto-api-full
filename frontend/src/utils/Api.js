class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }

  register(email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    }).then(this._getResponseData);
  }

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    }).then(this._getResponseData);
  }

  signout() {
    return fetch(`${this._url}/signout`, {
      method: "POST",
      headers: this._headers,
      credentials: 'include',
    }).then(this._getResponseData);
  }

  getContent() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: 'include',
    }).then(this._getResponseData);
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
      credentials: 'include',
    }).then(this._getResponseData);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
      credentials: 'include',
    }).then(this._getResponseData);
  }

  getAllData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
      credentials: 'include',
    }).then(this._getResponseData);
  }

  setAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
      credentials: 'include',
    }).then(this._getResponseData);
  }

  sendNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
      credentials: 'include',
    }).then(this._getResponseData);
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
      credentials: 'include',
    }).then(this._getResponseData);
  }

  removeLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
      credentials: 'include',
    }).then(this._getResponseData);
  }
  //like button toggle
  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this.addLike(cardId);
    } else {
      return this.removeLike(cardId);
    }
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
      credentials: 'include',
    }).then(this._getResponseData);
  }
}

const api = new Api({ 
  // baseUrl: "http://localhost:3000",
  baseUrl: "https://api.mesto.jack1ee7.nomoredomains.club",
  headers: {
    "Content-Type": "application/json",
  },
 });

export default api;
