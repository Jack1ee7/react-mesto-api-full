class Api {
  constructor(config) {
    this._url = config.baseUrl;
  }

  async register(email, password) {
    const res = await fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });
    return this._getResponseData(res);
  }

  async authorize(email, password) {
    const res = await fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    });
    return this._getResponseData(res);
  }

  async getContent() {
    const res = await fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    return this._getResponseData(res);
    
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  async getUserInfo() {
    const res = await fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    return this._getResponseData(res);
  }

  async getInitialCards() {
    const res = await fetch(`${this._url}/cards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    return this._getResponseData(res);
  }

  getAllData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }

  async setUserInfo(data) {
    const res = await fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
      credentials: 'include',
    });
    return this._getResponseData(res);
  }

  async setAvatar(data) {
    const res = await fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
      credentials: 'include',
    });
    return this._getResponseData(res);
  }

  async sendNewCard(data) {
    const res = await fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
      credentials: 'include',
    });
    return this._getResponseData(res);
  }

  async addLike(cardId) {
    const res = await fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    return this._getResponseData(res);
  }

  async removeLike(cardId) {
    const res = await fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    return this._getResponseData(res);
  }
  //like button toggle
  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return this.addLike(cardId);
    } else {
      return this.removeLike(cardId);
    }
  }

  async deleteCard(cardId) {
    const res = await fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    return this._getResponseData(res);
  }
}

const api = new Api({ baseUrl: "http://localhost:3000" });

export default api;
