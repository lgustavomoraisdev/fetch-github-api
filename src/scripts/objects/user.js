 const user = {
    avatarUrl:'',
    name: '',
    bio:'',
    userName:'',
    followers:'',
    followings:'',
    repositories:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login 
        this.followers = gitHubUser.followers
        this.followings = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
 }

 export { user }