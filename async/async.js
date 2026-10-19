const statusElement = document.getElementById("status");
const getUsersButton = document.getElementById("get-users");
const deleteAllButton = document.getElementById("delete-all");
const usersList = document.getElementById("users-list");

function renderUsers(users) {
  usersList.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("li");
    card.classList.add("users-page__card");

    const name = document.createElement("p");
    name.classList.add("users-page__card-name");
    name.textContent = `${user.name} ${user.surname}`;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("users-page__card-button");
    deleteButton.textContent = "Удалить";

    deleteButton.addEventListener("click", () => {
      deleteUser(user.id);
    });

    card.append(name, deleteButton);
    usersList.append(card);
  });

    if (users.length === 0) {
      statusElement.textContent = "Пользователей нет";
    } else {
      statusElement.textContent = "";
    }
}

function deleteUser(id) {
  const users = JSON.parse(localStorage.getItem("users"));
  const updatedUsers = users.filter((user) => user.id !== id);

  localStorage.setItem("users", JSON.stringify(updatedUsers));
  renderUsers(updatedUsers);
}

async function fetchUsers() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch("./users.json");

  if (!response.ok) {
    throw new Error("Не удалось загрузить данные");
  }

  const data = await response.json();
  return data.users;
}

async function loadUsers() {
  const savedUsers = localStorage.getItem("users");

  if (savedUsers !== null) {
    const users = JSON.parse(savedUsers);
    renderUsers(users);
    return;
  }

  try {
    const users = await fetchUsers();
    localStorage.setItem("users", JSON.stringify(users));
    renderUsers(users);
  } catch (error) {
    console.log(error);
    statusElement.textContent = "Ошибка при загрузке данных";
  }
}

deleteAllButton.addEventListener("click", () => {
  if (usersList.children.length === 0) {
    statusElement.textContent = "Карточек уже нет";
    return;
  }

  localStorage.setItem("users", JSON.stringify([]));
  renderUsers([]);
  statusElement.textContent = "Все карточки удалены";
});

getUsersButton.addEventListener("click", async () => {
  statusElement.textContent = "Данные загружаются...";

  try {
    const users = await fetchUsers();

    if (usersList.children.length === users.length) {
      statusElement.textContent = "Все пользователи уже отображены";
      return;
    }

    localStorage.setItem("users", JSON.stringify(users));
    renderUsers(users);
  } catch (error) {
    console.log(error);
    statusElement.textContent = "Ошибка при загрузке данных";
  }
});

loadUsers();

