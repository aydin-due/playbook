const issue = {
    title: "Error on feature",
    repositoryNameAssociated: "playbook",
    status: "open",
    numberOfComments: 100,
    labels: ["bugs","documentation"],
    author: "aydin-due",
    dateCreated: "Tue 10/01/22",
    lastUpdated: "Fri 13/03/22",
    
    getTitleAndAuthor: function(){
      return `The issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
      return `The issue ${this.title} is ${this.status} and has ${this.numberOfComments} comments`
    }
   }
   
   console.log("Nombre del issue: " + issue.title)
   console.log("Información del issue: " + issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())