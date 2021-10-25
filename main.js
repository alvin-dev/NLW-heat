
      const LinksSocialMedia = {
        github: "alvin-dev",
        gmail: "alvinweeb@gmail.com",
        instagram: "alvaro_guedes_/",
        facebook: "alvaro.web.dev/",
        twitter: "DevGuedes"
      }

      function changeSocialMediaLinks() {
        
        for(let li of socialLinks.children){
          const social = li.getAttribute('class')
          li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
        }

      }

      changeSocialMediaLinks()

      function getGitHubProfileInfos() {
        url = `https://api.github.com/users/${LinksSocialMedia.github}`,

        fetch(url).then(response => {})

        // console.log(url)
      }

      getGitHubProfileInfos()