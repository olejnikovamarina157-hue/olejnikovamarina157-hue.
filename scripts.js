const recipes = [
    { name: 'Борщ', category: 'soup' },
    ];

function showRecipes(category) {
    const menu = document.getElementById(`${category}-dishes-menu`);
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function getRandomRecipe() {
    window.location.href = `/recipes/${Math.floor(Math.random() * recipes.length)}.html`;
}

let postsContainer = document.querySelector('#posts-container');

function addPost() {
    let postText = document.querySelector('#post-textarea').value.trim();
    let imgInput = document.querySelector('#post-image-input');
    let emojiPicker = document.querySelector('#emoji-picker');
    let date = new Date().toLocaleDateString();

    if (!postText || !imgInput.files.length) return alert("Заполните поля!");

    let div = document.createElement('div');
    div.className = 'post';

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imgInput.files[0]);
    img.alt = 'Постовая фотография';
    img.classList.add('post-img');

    let text = document.createElement('p');
    text.innerHTML = `<span class="post-date">${date}</span> ${postText}`;

    let emojiImg = document.createElement('img');
    emojiImg.src = `./emojis/${emojiPicker.value}`;
    emojiImg.classList.add('post-emoji');

    div.appendChild(emojiImg);
    div.appendChild(text);
    div.appendChild(img);

    postsContainer.prepend(div); 
}
