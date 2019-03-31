class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    //Display profile
    showProfile(user) {

        const inner = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
                    <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank"></a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Public Followers: ${user.public_followers}</span>
                    <span class="badge badge-info">Public Following: ${user.public_following}</span>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">
                            Company: ${user.company}
                        </li>
                        <li class="list-group-item">
                            Website/Blog: ${user.blog}
                        </li>
                        <li class="list-group-item">
                            Location: ${user.location}
                        </li>
                        <li class="list-group-item">
                            Member Since: ${user.created_at}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
        this.profile.innerHTML = inner;
    }

    //Clear profile
    clearProfile(){
        this.profile.innerHTML = '';
    }

    //Show Alert message
    showAlert(message, className) {
        this.clearAllert();
        const alert = document.createElement('div');
        alert.className = className;
        alert.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(alert, search);

        //timeout after 3s
        setTimeout( () => {
            this.clearAllert()
        }, 3000)
    }

    //Clear alert message
    clearAllert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    //Show user repos
    showRepos(repos) {
        let output = '';
        repos.forEach( (repo)=> {
            output += `
                <div class="card card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                             <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Forks: ${repo.form_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('repos').innerHTML = output;
    }
}
