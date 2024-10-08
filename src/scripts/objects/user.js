 const user = {
    avatarUrl:'',
    name: '',
    bio:'',
    userName:'',
    followers:'',
    followings:'',
    events:[],
    repositories:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login 
        this.followers = gitHubUser.followers
        this.followings = gitHubUser.following
    },
    setEvents(events){
        this.events = events
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
 }

 export { user }