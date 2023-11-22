const headerNav = document.querySelector('.main-nav');
const userInfoHeader = document.querySelector('.logo-user-cart');
const loguedUser = JSON.parse(localStorage.getItem("currentUser"));

if (loguedUser) {
    if (loguedUser.role === 'ADMIN_ROLE') {
        const adminUserLiElement = document.createElement("li");
        adminUserLiElement.classList.add('nav-item');

        const adminUserLink = document.createElement("a");
        adminUserLink.href = '/pages/admin/user-admin.html';
        adminUserLink.innerText = 'USUARIOS';
        adminUserLink.classList.add('nav-link');
        adminUserLiElement.appendChild(adminUserLink);
        const productAdminLiElement = document.createElement("li");
        productAdminLiElement.classList.add('nav-item');

        const productAdminLink = document.createElement("a");
        productAdminLink.href = '/pages/admin/product-admin.html';
        productAdminLink.innerText = 'PRODUCTOS';
        productAdminLink.classList.add('nav-link');
        productAdminLiElement.appendChild(productAdminLink);
        
        const navList = document.querySelector('.nav-list');

        navList.appendChild(adminUserLiElement);
        navList.appendChild(productAdminLiElement);

    }
}

    const userNameHTML = userInfoHeader.querySelector('.nombre-user')

    userNameHTML.innerText = loguedUser.fullname

    const userImg = document.createElement('img')
    userImg.src = loguedUser.image;
    userImg.alt = `${loguedUser.fullname} profile picture`
    userImg.classList.add('user-image')
    const defaultLogo = userInfoHeader.querySelector('#default-logo');
    defaultLogo.parentNode.replaceChild(userImg, defaultLogo);

    const userActionHTML = userInfoHeader.querySelector('.user-action')

    const logoutButton = document.createElement('button');
    logoutButton.classList.add('logout-button')
    logoutButton.innerText = 'Logout'
    logoutButton.onclick = function() {

        localStorage.removeItem("currentUser");
        window.location.href = '/index.html'
    }
    userActionHTML.append(logoutButton)



