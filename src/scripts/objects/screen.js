const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class = "info">
                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada'}</p></br></br>
                                <div class="follow">
                                    <h4>👥 Seguidores</h4>
                                    <p>${user.followers ?? 'Não possui seguidores'}</p>
                                    <h4>👤 Seguindo</h4>
                                    <p>${user.followings ?? 'Não possui seguidores'}</p>
                                </div>
                                </div>
                            </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>            
            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado.</h3>"
    }
}

export { screen }