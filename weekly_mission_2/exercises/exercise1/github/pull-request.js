const pullRequest = {
    title: "updated index",
    branchName: "main",
    dateCreated: "Tue 10/01/22",
    status: "open",
    repositoryNameAssociated: "playbook",
    author: "aydin-due",
    
    getStatus: function(){
        return `The pull request "${this.title}" is ${this.status}`
    },

    getTitleAndAuthor: function(){
      return `The pull request "${this.title}" was created by ${this.author}`
    },
   }
   
   console.log("Nombre del pull request: " + pullRequest.title)
   console.log("Status del pull request: " + pullRequest.getStatus())
   console.log(pullRequest.getTitleAndAuthor())