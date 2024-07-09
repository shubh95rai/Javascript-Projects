const search = document.querySelector(".search");
const profile = document.querySelector(".profile");
const loading = document.querySelector(".loading");

function showLoading() {
  loading.classList.remove("hidden");
  profile.classList.add("hidden");
}
function hideLoading() {
  loading.classList.add("hidden");
  profile.classList.remove("hidden");
}

function fetchUser(searchValue) {
  showLoading();

  setTimeout(async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${searchValue}`,
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        hideLoading();
        displayProfile(data);
      }
    } catch (error) {
      console.log(error.message);
      hideLoading();
    }
  }, 1000);
}

search.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const searchValue = search.value;

    if (searchValue) {
      fetchUser(searchValue);
    }
  }
});

function displayProfile(user) {
  const {
    followers,
    following,
    avatar_url,
    name,
    public_repos,
    html_url,
    login,
  } = user;

  profile.innerHTML = `<div class="profile-card">
  <img src=${avatar_url} class="w-52 rounded-full "/>

  <div class="flex flex-col items-center gap-10 w-full">
  <p class="text-2xl">${name !== null ? name : login}</p>
  
  <div class="flex gap-5 ">
  <p class="">Followers: ${followers}</p>
  <p class="">Following: ${following}</p>
  <p class="">Public repos: ${public_repos}</p>
  </div>

  <button class="rounded border border-neutral-300 px-4 py-2 text-xl capitalize"><a href=${html_url} target="_blank">view profile</a></button>
  </div>
  </div>`;
}
