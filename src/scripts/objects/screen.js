const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class = "info">
                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada'}</p></br></br>
                                <div class="follow">
                                    <h4>${'👥 Seguidores'}</h4>
                                    <p>${user.followers}</p>
                                    <h4>${'🚶‍♂️ Seguindo'}</h4>
                                    <p>${user.followings}</p>
                                </div>
                                </div>
                            </div>`
        
        let eventsItens = ''
        user.events.forEach(function(events){
            if(events.type ==='PushEvent'){
                eventsItens += `<li><span>${events.repo.name}</span> - ${events.payload.commits[0].message}</li>`
            } else if (events.type === 'CreateEvent'){
                eventsItens += `<li><span>${events.repo.name}</span> - ${'Sem mensagem de commit.'}</li>`
            }
        })
            this.userProfile.innerHTML += `<div class="events section">
            <h2>Eventos</h2>
            <ul>${eventsItens}</ul>            
            </div>`
            
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += 
            `<li><a href="${repo.html_url}" target="_blank">${repo.name} <br><br> <div><p>${' 🍴 ' + repo.forks}</p> <p>${' ⭐ ' + repo.stargazers_count}</p> <p>${' 👀 ' + repo.watchers}</p> <p>${' 👨‍💻 ' + repo.language}</p></div></a></li>`
        )

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