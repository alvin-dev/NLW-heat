
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

        linkGmail.href = `mailto:${LinksSocialMedia.gmail}`

      }

      changeSocialMediaLinks()

      function getGitHubProfileInfos() {
        url = `https://api.github.com/users/${LinksSocialMedia.github}`,

        fetch(url)
        .then(response => response.json())
        .then( data => {
          userName.textContent = data.name
          userBio.textContent = data.bio
          userImage.src = data.avatar_url
          userLink.href = data.html_url
          userLogin.textContent = data.login
        })

        

        // console.log(url)
      }

      getGitHubProfileInfos()